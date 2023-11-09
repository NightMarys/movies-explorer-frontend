import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesList from "../../utils/moviesList";

function SavedMovies() {
  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList saved={true} moviesList={moviesList.slice(0, 3)} />
    </main>
  );
}

export default SavedMovies;
