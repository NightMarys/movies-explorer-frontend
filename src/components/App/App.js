import React from "react";
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
// import ProtectedRoute from "../ProtectedRoute";
import api from "../../utils/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ROUTS } from '../../utils/constants';
  
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

    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        api
          .getUserInfo()
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      React.useEffect(() => {
        api
          .getInitialCards()
          .then((serverCards) => {
            setCards(serverCards);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        <div className="page__container">

        <Header />
        <Routes>
        <Route
              path={mainPath}
              element={<Main />}
            />
     <Route
              path={moviesPath}
                  element={<Movies 
                    cards={cards}
                  />}

            />
            <Route
              path={savedMoviesPath}
              element={<SavedMovies />}

            />
            <Route
              path={profilePath}
              element={<Profile />}

            />
    
            <Route
              path={registerPath}
              element={<Register  />}
            />

            <Route
              path={loginPath}
              element={<Login  />}
            />
            <Route
              path={otherPath}
              element={<Error />}
            />
    
          </Routes>
   
        <Footer />
                </div>
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;