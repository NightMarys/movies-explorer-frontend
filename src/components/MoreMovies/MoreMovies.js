import React from "react";
import "./MoreMovies.css";

function MoreMovies(props) {
  return (
    <div className="more-movies__wrapper">
      <button
        className="more-movies__button"
        type="button"
        onClick={props.clickOnMoreButton}
      >
        Ещё
      </button>
    </div>
  );
}

export default MoreMovies;
