import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const { pathname } = useLocation();
  const cardLikeButtonClassName = `movies__favorite-button ${
    props.isSaved ? "movies__favorite-button_active" : ""
  }`;
  const image =
    pathname === `${"/movies"}`
      ? `${"https://api.nomoreparties.co"}${props.movie.image.url}`
      : `${props.movie.image}`;

  function handleSaveMovie() {
    props.onMovieSave(props.movie);
  }

  function handleDeleteMovie() {
    props.onMovieDelete(props.movie);
  }

  function convertDuration(duration) {
    const hour = Math.round(duration / 60);
    const min = duration - 60;
    return `${hour}ч ${min}м`;
  }

  return (
    <li className="movies__item" tabIndex={0}>
      <a
        className="movies__link"
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies__image" src={image} alt={props.movie.nameRU} />
      </a>
      <div className="movies__info">
        <div className="movies__heading">
          <h2 className="movies__title">{props.movie.nameRU}</h2>

          {pathname === "/saved-movies" ? (
            <button
              type="button"
              className="movies__delete-button"
              onClick={handleDeleteMovie}
            />
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={props.isSaved ? handleDeleteMovie : handleSaveMovie}
            />
          )}
        </div>

        <p className="movies__duration">
          {convertDuration(props.movie.duration)}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
