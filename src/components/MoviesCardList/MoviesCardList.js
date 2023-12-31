import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { moviesList, saved, onClickMore } = props;

  return (
    <section className="movies">
      <ul className="movies__card-list">
        {moviesList.map((movie) => (
          <MoviesCard
            movie={movie}
            onCardClick={() => {}}
            key={movie.movieId}
            onCardLike={() => {}}
            onCardDelete={() => {}}
            saved={saved}
          />
        ))}
      </ul>
      <div className="movies__wrapper">
        {!saved && (
          <button
            type="button"
            className="movies__button-more"
            onClick={onClickMore}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
