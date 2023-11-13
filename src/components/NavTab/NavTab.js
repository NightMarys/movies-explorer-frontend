import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Navigation from "../Navigation/Navigation";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="nav">
      <Navigation>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/#about-project" className="nav__link">
              О проекте
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#techs" className="nav__link">
              Технологии
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#about-me" className="nav__link">
              Студент
            </Link>
          </li>
        </ul>
      </Navigation>
    </div>
  );
}

export default NavTab;
