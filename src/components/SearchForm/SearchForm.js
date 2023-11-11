import React from "react";

import "./SearchForm.css";

function SearchForm() {
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
        />
        <button type="button" className="search-form__button"></button>
      </form>
      <div className="search-form__box">
        <input className="search-form__checkbox" type="checkbox" />
        <h2 className="search-form__checkbox-name"> Короткометражки </h2>
      </div>
    </div>
  );
}

export default SearchForm;
