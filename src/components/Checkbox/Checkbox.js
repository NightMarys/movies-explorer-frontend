import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          type="checkbox"
          className="checkbox__input"
          disabled={props.isSearching}
          checked={props.isFilterOn}
          onChange={(evt) => props.onFilterChange(evt.target.checked)}
        />
        <h2 className="checkbox__name"> Короткометражки </h2>
        Короткометражки
      </label>
    </div>
  );
}

export default Checkbox;
