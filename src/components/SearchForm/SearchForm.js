import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './SearchForm.css';


function SearchForm(props) {

  const [searchName, setSearchName] = React.useState('');


  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchName(localStorage.getItem("moviesSearchName"))
    }
  }, [])


  return (
    <section className="search-form">
      <form className="search-form__search"  noValidate>
        <input
          value={searchName || ""}
          
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