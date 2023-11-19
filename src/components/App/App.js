import { useState, useEffect, useCallback } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import * as auth from "../../utils/Auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ROUTS from "../../utils/constants";

const {
  mainPath,
  loginPath,
  registerPath,
  moviesPath,
  savedMoviesPath,
  profilePath,
  otherPath,
} = ROUTS;

function App(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [requestError, setRequestError] = useState("");
  const [successfulUpdate, setSuccessfulUpdate] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const includeHeader = ({ pathname }) =>
    Boolean(["/", "/movies", "/saved-movies", "/profile"].includes(pathname));
  const includeFooter = ({ pathname }) =>
    Boolean(["/", "/movies", "/saved-movies"].includes(pathname));

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      api
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .getToken(token)
        .then((res) => {
          console.log(res);
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(`${location.pathname}${location.search}`, {
              replace: true,
            });
          }
        })
        .catch((err) => {
          if (err === 400) {
            console.log("Токен не передан или передан не в том формате");
          }
          if (err === 401) {
            console.log("Переданный токен некорректен");
          }
        });
    }
  }, [loggedIn]);

  function handleLogIn(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === 400) {
          console.log("не передано одно из полей");
        }
        if (err === 401) {
          console.log("пользователь с email не найден");
        }
      });
  }

  function handleRegistration(name, email, password) {
    console.log(name, email, password);
    auth
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        handleLogIn(email, password);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === 400) {
          console.log("некорректно заполнено одно из полей");
        }
      });
  }

  function handleSignOut() {
    localStorage.clear();
    setCurrentUser("");
    setLoggedIn(false);
    navigate("/");
  }

  async function handleSearchMovies() {
    setLoading(true);
    setRequestError(false);
    try {
      const result = moviesApi.getMovies();
      if (result) {
        return result;
      }
    } catch (err) {
      setRequestError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleSaveMovie(movie) {
    api
      .addMovie(movie)
      .then((newMovie) => setSavedMovies([newMovie, ...savedMovies]))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    api
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    console.log(name, email);
    api
      .patchUserInfo(name, email)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
        setSuccessfulUpdate(true);
      })
      .catch((err) => {
        setSuccessfulUpdate(false);
        console.log(err);
      });
  }

  const openBurgerMenu = () => {
    setIsMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          {includeHeader(location) ? (
            <Header openMenu={openBurgerMenu} loggedIn={loggedIn} />
          ) : (
            ""
          )}
          <Routes>
            <Route path={mainPath} element={<Main />} />
            <Route
              path={moviesPath}
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Movies}
                  onSearch={handleSearchMovies}
                  onMovieDelete={handleDeleteMovie}
                  onMovieSave={handleSaveMovie}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path={savedMoviesPath}
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  onMovieDelete={handleDeleteMovie}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path={profilePath}
              element={
                <ProtectedRoute
                  onLogOut={handleSignOut}
                  onLoading={isLoading}
                  onProfile={handleUpdateUser}
                  requestError={requestError}
                  isProfileSaved={successfulUpdate}
                  loggedIn={loggedIn}
                  element={Profile}
                />
              }
            />
            <Route
              path={registerPath}
              element={
                <Register
                  onRegister={handleRegistration}
                  onLoading={isLoading}
                  requestError={requestError}
                  loggedIn={loggedIn}
                />
              }
            />

            <Route
              path={loginPath}
              element={
                <Login
                  onLogin={handleLogIn}
                  onLoading={isLoading}
                  requestError={requestError}
                  loggedIn={loggedIn}
                />
              }
            />

            <Route path={otherPath} element={<Error />} />
          </Routes>
          <BurgerMenu isOpen={isMenuOpen} onClose={closeBurgerMenu} />
          {includeFooter(location) ? <Footer /> : ""}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
