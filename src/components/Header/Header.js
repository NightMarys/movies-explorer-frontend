import './Header.css';
import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from "../../images/HeaderLogo.svg";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { loggedIn } = props;

  const { isLoggedIn } = React.useContext(CurrentUserContext);



  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
    {!loggedIn ? (
      <Navigation>
        <ul className='header__list header__list_noauth'>
          <li className='header__item'>
            <Link className='header__link' to='/signup'>
              Регистрация
            </Link>
          </li>
          <li className='header__item'>
            <Link className='header__button' to='/signin'>
              Войти
            </Link>
          </li>
        </ul>
      </Navigation>
    ) : (
      <>
        <div className='header__wrapper'>
          <Navigation>
            <ul className='header__list header__list_auth'>
              <li className='header__item'>
                <NavLink className='header__link' to='/'>
                  Главная
                </NavLink>
              </li>
              <li className='header__item'>
                <NavLink className='header__link' to='/movies'>
                  Фильмы
                </NavLink>
              </li>
              <li className='header__item'>
                <NavLink className='header__link' to='/saved-movies'>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </Navigation>
          <Navigation>
            <NavLink
              className='header__link header__link_profile'
              to='/profile'
            >
              Аккаунт
            </NavLink>
          </Navigation>
          <button
            className='header__button-close'
            type='button'
            aria-label='Закрыть меню'
            //onClick={handleCloseClick}
          />
        </div>
        <button
          className='header__button-menu'
          type='button'
          aria-label='Окрыть меню'
          //onClick={handleMenuClick}
        />
      </>
    )}

</header>

  );
}

export default Header;