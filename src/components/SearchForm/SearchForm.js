import React from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  const [searchName, setSearchName] = React.useState("");
  const [searchError, setSearchError] = React.useState("");

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchName(localStorage.getItem("moviesSearchName"));
    }
  }, []);

  const handleChange = (evt) => {
    setSearchName(evt.target.value);
  };

  React.useEffect(() => {
    setSearchError("");
  }, [searchName]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (location.pathname === "/movies") {
      searchName
        ? props.onSubmit(searchName)
        : setSearchError("Нужно ввести ключевое слово");
    } else {
      props.onSubmit(searchName);
    }
  };

  return (
    <div className="search-form">
      <form className="search-form__search" noValidate>
        <input
          id="movie-input"
          name="movie"
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          required
          value={searchName || ""}
          onChange={handleChange}
        />
        <button
          type="button"
          className="search-form__button"
          onClick={handleSubmit}
        ></button>
      </form>
      <span className="search-form__error">{searchError}</span>
      <Checkbox
        isSearching={props.isSearching}
        isFilterOn={props.isFilterOn}
        onFilterChange={props.onFilterChange}
      />
    </div>
  );
}

export default SearchForm;
