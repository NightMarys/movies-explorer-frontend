import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import Navigation from "../Navigation/Navigation";

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signup" &&
      pathname !== "/signin" &&
      pathname !== "*" &&
      pathname !== "/profile" ? (
        <footer className="footer">
          <div className="footer__container">
            <p className="footer__description">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__wrapper">
              <Navigation className={"footer__nav"}>
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link
                      className="footer__link"
                      to="https://practicum.yandex.ru/"
                      target="_blank"
                    >
                      Яндекс.Практикум
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link
                      className="footer__link"
                      to="https://github.com/NightMarys/movies-explorer-frontend"
                      target="_blank"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </Navigation>
              <p className="footer__copyright">&copy; 2023</p>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
}

export default Footer;
