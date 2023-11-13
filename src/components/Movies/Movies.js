import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesList from "../../utils/moviesList";

function Movies() {
  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList
        saved={false}
        moviesList={moviesList}
        // onClickMore={handleClickMore}
      />
    </main>
  );
}

export default Movies;
