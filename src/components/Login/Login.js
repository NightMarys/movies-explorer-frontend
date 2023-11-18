import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../Register/Register.css";
import logo from "../../images/HeaderLogo.svg";
import useValidation from "../../utils/useValidation";

function Login(props) {
  const { formValues, handleChange, resetForm, errors } = useValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onLogin(formValues.email, formValues.password);
    resetForm();
  };

  return props.loggedIn ? (
    <Navigate to="/movies" replace />
  ) : (
    <main className="content">
      <div className="auth">
        <Link className="auth__link" to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="auth__label">
            E-mail
          </label>
          <input
            type="email"
            className="auth__input"
            name="email"
            placeholder="Email"
            required
            minLength="2"
            maxLength="30"
            value={formValues.email || ""}
            onChange={handleChange}
          />
          <span className="auth__error">{errors.email || ""}</span>
          <label htmlFor="password" className="auth__label">
            Пароль
          </label>
          <input
            type="password"
            className="auth__input"
            id="password-input"
            name="password"
            placeholder="Пароль"
            required
            value={formValues.password || ""}
            onChange={handleChange}
            minLength="6"
          />
          <span className="auth__error">{errors.password || ""}</span>
          <button type="submit" className="auth__save-btn auth__save-btn_l">
            Войти
          </button>
        </form>
        <p className="auth__text">
          Ещё не зарегистрированы?&nbsp;
          <Link to="/signup" className="auth__link">
            Регистрация
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Login;
