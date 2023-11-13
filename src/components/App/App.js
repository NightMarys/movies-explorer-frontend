import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
// import ProtectedRoute from "../ProtectedRoute";
// import api from "../../utils/Api";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openBurgerMenu = () => {
    setIsMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route
            path={mainPath}
            element={
              <>
                <Header openMenu={openBurgerMenu} />
                <Main loggedIn={loggedIn} />
                <Footer />
              </>
            }
          />
          <Route
            path={moviesPath}
            element={
              <>
                <Header openMenu={openBurgerMenu} />
                <Movies loggedIn={loggedIn} />
                <Footer />
              </>
            }
          />
          <Route
            path={savedMoviesPath}
            element={
              <>
                <Header openMenu={openBurgerMenu} />
                <SavedMovies loggedIn={loggedIn} />
                <Footer />
              </>
            }
          />
          <Route
            path={profilePath}
            element={
              <>
                <Header openMenu={openBurgerMenu} />
                <Profile loggedIn={loggedIn} />
              </>
            }
          />
          <Route
            path={registerPath}
            element={loggedIn ? <Navigate to="/" replace /> : <Register />}
          />

          <Route
            path={loginPath}
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login setLoggedIn={setLoggedIn} />
              )
            }
          />

          <Route path={otherPath} element={<Error />} />
        </Routes>
        <BurgerMenu isOpen={isMenuOpen} onClose={closeBurgerMenu} />
      </div>
    </div>
  );
}

export default App;
