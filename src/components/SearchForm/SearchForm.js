import React from "react";

import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__search" noValidate>
        <input
          id="movie-input"
          name="movie"
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          required
        />
        <button className="search-form__button"></button>
      </form>

      <span className="search-form__line"></span>
    </section>
  );
}

export default SearchForm;
