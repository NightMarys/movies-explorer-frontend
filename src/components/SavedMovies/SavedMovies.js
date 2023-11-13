import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import moviesList from "../../utils/moviesList";

function SavedMovies(props) {
  const [moviesList, setMoviesList] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isFilterOn, setFilter] = React.useState(false);
  const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("savedMoviesSearchName", "");
    localStorage.setItem("isSavedMoviesFilterOn", false);
    setMoviesList(props.savedMovies);
    setFilteredMovies(props.savedMovies);
  }, []);

  React.useEffect(() => {
    setMoviesNotFound(false);
    if (
      localStorage.getItem("savedMoviesSearchName") &&
      localStorage.getItem("isSavedMoviesFilterOn")
    ) {
      const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
      setFilter(filter);
      const searchName = localStorage.getItem("savedMoviesSearchName");
      const found = handleMoviesSearch(props.savedMovies, searchName, true);
      setFilteredMovies(found);
      if (!found.length) {
        setMoviesNotFound(true);
        setMoviesList(found);
      } else {
        const filtered = handleMoviesFiltering(found, filter, true);
        setMoviesList(filtered);
        if (!filtered.length) {
          setMoviesNotFound(true);
        }
      }
    } else if (
      !localStorage.getItem("savedMoviesSearchName") &&
      JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"))
    ) {
      setFilteredMovies(props.savedMovies);
      const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
      setFilter(filter);
      const filtered = handleMoviesFiltering(props.savedMovies, filter, true);
      setMoviesList(filtered);
      if (!filtered.length) {
        setMoviesNotFound(true);
      }
    } else {
      setMoviesList(props.savedMovies);
      setFilteredMovies(props.savedMovies);
    }
  }, [props.savedMovies]);

  function handleMoviesSearch(movies, searchName, isSavedMovies) {
    const normalizeSearchName = searchName.toLowerCase().trim();
    const result = movies.filter((movie) => {
      const normalizeNameRu = movie.nameRU.toLowerCase().trim();
      const normalizeNameEn = movie.nameEN.toLowerCase().trim();
      return (
        normalizeNameRu.includes(normalizeSearchName) ||
        normalizeNameEn.includes(normalizeSearchName)
      );
    });
    if (!isSavedMovies) {
      localStorage.setItem("foundMovies", JSON.stringify(result));
      localStorage.setItem("moviesSearchName", normalizeSearchName);
    } else {
      localStorage.setItem("savedMoviesSearchName", normalizeSearchName);
    }
    return result;
  }

  function handleMoviesFiltering(movies, isFilterOn, isSavedMovies) {
    if (!isSavedMovies) {
      localStorage.setItem("isMoviesFilterOn", isFilterOn);
    } else {
      localStorage.setItem("isSavedMoviesFilterOn", isFilterOn);
    }
    if (isFilterOn) {
      const result = movies.filter((movie) => movie.duration <= 40);
      return result;
    } else {
      return movies;
    }
  }

  const handleSearchSubmit = React.useCallback(
    (searchName) => {
      setMoviesNotFound(false);
      setIsSearching(true);
      if (props.savedMovies.length) {
        const found = handleMoviesSearch(props.savedMovies, searchName, true);
        setFilteredMovies(found);
        if (!found.length) {
          setMoviesNotFound(true);
          setIsSearching(false);
          setMoviesList(found);
        } else {
          const filtered = handleMoviesFiltering(found, isFilterOn, true);
          setIsSearching(false);
          setMoviesList(filtered);
          if (!filtered.length) {
            setIsSearching(false);
            setMoviesNotFound(true);
          }
        }
      } else {
        setIsSearching(false);
        setMoviesNotFound(true);
      }
    },
    [props.savedMovies, isFilterOn]
  );

  const handleFilterClick = React.useCallback(
    (isChecked) => {
      setFilter(isChecked);
      setMoviesNotFound(false);
      const filtered = handleMoviesFiltering(filteredMovies, isChecked, true);
      setMoviesList(filtered);
      if (!filtered.length) {
        setMoviesNotFound(true);
      }
    },
    [filteredMovies]
  );

  return (
    <main className="content">
      <SearchForm
        onSubmit={handleSearchSubmit}
        isSearching={isSearching}
        onFilterChange={handleFilterClick}
        isFilterOn={isFilterOn}
      />
      <MoviesCardList
        movies={moviesList}
        moviesNotFound={moviesNotFound}
        onMovieDelete={props.onMovieDelete}
        savedMovies={props.savedMovies}
      />
    </main>
  );
}

export default SavedMovies;
