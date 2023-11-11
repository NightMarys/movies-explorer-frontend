import "./Header.css";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../images/HeaderLogo.svg";

// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const { openMenu } = props;

  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signup" && pathname !== "/signin" && pathname !== "*" ? (
        <header className="header">
          <Link className="header__link header__link_logo" to="/">
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>
          {pathname !== "/movies" &&
          pathname !== "/saved-movies" &&
          pathname !== "/profile" ? (
            <Navigation>
              <ul className="header__list header__list_noauth">
                <li className="header__item">
                  <Link className="header__link" to="/signup">
                    Регистрация
                  </Link>
                </li>
                <li className="header__item">
                  <Link className="header__button" to="/signin">
                    Войти
                  </Link>
                </li>
              </ul>
            </Navigation>
          ) : (
            <>
              <div className="header__wrapper">
                <Navigation>
                  <ul className="header__list header__list_auth">
                    <li className="header__item">
                      <NavLink className="header__link" to="/">
                        Главная
                      </NavLink>
                    </li>
                    <li className="header__item">
                      <NavLink className="header__link" to="/movies">
                        Фильмы
                      </NavLink>
                    </li>
                    <li className="header__item">
                      <NavLink className="header__link" to="/saved-movies">
                        Сохранённые фильмы
                      </NavLink>
                    </li>
                  </ul>
                </Navigation>
                <Navigation>
                  <NavLink
                    className="header__link header__link_profile"
                    to="/profile"
                  >
                    Аккаунт
                  </NavLink>
                </Navigation>
              </div>
              <button
                className="header__button-menu"
                type="button"
                aria-label="Окрыть меню"
                onClick={openMenu}
              />
            </>
          )}
        </header>
      ) : null}
    </>
  );
}

export default Header;
