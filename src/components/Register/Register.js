import React from "react";
import { Navigate, Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/HeaderLogo.svg";
import useValidation from "../../utils/useValidation";

function Register(props) {
  const { formValues, handleChange } = useValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onRegister(formValues.name, formValues.email, formValues.password);
  };

  return props.loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="content">
      <div className="auth">
        <Link className="auth__link" to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="auth__label">
            Имя
          </label>
          <input
            type="text"
            id="name"
            className="auth__input"
            name="name"
            placeholder="Name"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            value={formValues.name || ""}
          />
          <label htmlFor="email" className="auth__label">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="auth__input"
            name="email"
            placeholder="Email"
            required
            minLength="2"
            maxLength="30"
            value={formValues.email || ""}
            onChange={handleChange}
          />
          <label htmlFor="password" className="auth__label">
            Пароль
          </label>
          <input
            type="password"
            className="auth__input"
            id="password"
            name="password"
            placeholder="Пароль"
            required
            value={formValues.password || ""}
            onChange={handleChange}
            minLength="6"
          />
          <button type="submit" className="auth__save-btn">
            Зарегистрироваться
          </button>
        </form>
        <p className="auth__text">
          Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Register;
