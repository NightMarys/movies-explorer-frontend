import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesList from "../../utils/moviesList";

function Movies() {
  const [maxMovies, setMaxMovies] = React.useState(8);
  function handleClickMore() {
    setMaxMovies(() => maxMovies + 2);
  }
  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList
        saved={false}
        moviesList={moviesList.slice(0, maxMovies)}
        onClickMore={handleClickMore}
      />
    </main>
  );
}

export default Movies;
