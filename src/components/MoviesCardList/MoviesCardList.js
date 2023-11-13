import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { PARAMS } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const [moviesList, setMoviesList] = React.useState([]);
  const [moviesParams, setMoviesParams] = React.useState({});

  const location = React.useLocation();

  React.useEffect(() => {
    if (location.pathname === "/movies" && props.movies.length) {
      const result = props.movies.filter((card, index) => {
        return index < moviesParams.current;
      });
      setMoviesList(result);
    }
  }, [location.pathname, props.movies, moviesParams]);

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
      setMoviesParams(PARAMS.base.cards);
    } else if (
      window.innerWidth < PARAMS.base.width &&
      window.innerWidth >= PARAMS.desktop.width
    ) {
      setMoviesParams(PARAMS.desktop.cards);
    } else if (
      window.innerWidth < PARAMS.desktop.width &&
      window.innerWidth >= PARAMS.tablet.width
    ) {
      setMoviesParams(PARAMS.tablet.cards);
    } else {
      setMoviesParams(PARAMS.mobile.cards);
    }
  }

  function handleClickOnMoreButton() {
    const start = moviesList.length;
    const end = start + moviesParams.more;
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
        <p className="movies-card-list__notification">Ничего не&nbsp;найдено</p>
      )}
      {props.searchError && (
        <p className="movies-card-list__notification">
          Во&nbsp;время запроса произошла ошибка. Возможно, проблема
          с&nbsp;соединением или сервер недоступен. Подождите немного
          и&nbsp;попробуйте ещё раз.
        </p>
      )}
      {props.movies.length !== 0 && !props.searchError && (
        <>
          <ul className="movies__card-list">
            {moviesList.map((movie) => (
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
            <div className="movies__wrapper">
              <button
                type="button"
                className="movies__button-more"
                onClick={handleClickOnMoreButton}
              >
                Ещё
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
