import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMovies from "../MoreMovies/MoreMovies";
import Preloader from "../Preloader/Preloader";
import { PARAMS } from "../../utils/constants";

function MoviesCardList(props) {
  const [moviesList, setMoviesList] = React.useState([]);
  const [moviesCardsParams, setMoviesCardsParams] = React.useState({});

  const location = useLocation();

  React.useEffect(() => {
    if (
      location.pathname === "/movies" &&
      props.movies &&
      props.movies.length
    ) {
      const result = props.movies.filter((card, index) => {
        return index < moviesCardsParams.current;
      });
      setMoviesList(result);
    }
  }, [location.pathname, props.movies, moviesCardsParams]);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setMoviesList(props.movies);
    }
  }, [location.pathname, props.movies]);

  React.useEffect(() => {
    handleResize();
  }, []);

  React.useEffect(() => {
    let timer;

    function handleSetTimeout() {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleResize();
        }, 1000);
      }
    }

    window.addEventListener("resize", handleSetTimeout);

    return () => window.removeEventListener("resize", handleSetTimeout);
  }, [window.innerWidth]);

  function handleResize() {
    if (window.innerWidth >= PARAMS.base.width) {
      setMoviesCardsParams(PARAMS.base.cards);
    } else if (
      window.innerWidth < PARAMS.base.width &&
      window.innerWidth >= PARAMS.desktop.width
    ) {
      setMoviesCardsParams(PARAMS.desktop.cards);
    } else if (
      window.innerWidth < PARAMS.desktop.width &&
      window.innerWidth >= PARAMS.tablet.width
    ) {
      setMoviesCardsParams(PARAMS.tablet.cards);
    } else {
      setMoviesCardsParams(PARAMS.mobile.cards);
    }
  }

  function handleClickOnMoreButton() {
    const start = moviesList.length;
    const end = start + moviesCardsParams.more;
    if (props.movies.length - start > 0) {
      const additionalCards = props.movies.slice(start, end);
      setMoviesList([...moviesList, ...additionalCards]);
    }
  }

  function handleSavedStatus(movie) {
    return props.savedMovies.find((card) => {
      return card.movieId === (movie.id || movie.movieId);
    });
  }

  return (
    <section className="movies">
      {props.isLoading && props.movies.length === 0 && <Preloader />}
      {props.moviesNotFound && (
        <p className="movies__notification">Ничего не&nbsp;найдено</p>
      )}
      {props.searchError && (
        <p className="movies__notification">
          Во&nbsp;время запроса произошла ошибка. Возможно, проблема
          с&nbsp;соединением или сервер недоступен. Подождите немного
          и&nbsp;попробуйте ещё раз.
        </p>
      )}
      {props.movies && props.movies.length !== 0 && !props.searchError && (
        <>
          <ul className="movies__card-list">
            {moviesList.map((movie, i) => (
              <MoviesCard
                movie={movie}
                key={movie.id || movie._id}
                onMovieSave={props.onMovieSave}
                onMovieDelete={props.onMovieDelete}
                isSaved={handleSavedStatus(movie) || false}
              />
            ))}
          </ul>
          {moviesList.length < props.movies.length && (
            <MoreMovies clickOnMoreButton={handleClickOnMoreButton} />
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
