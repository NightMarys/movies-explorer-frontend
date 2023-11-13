import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/HeaderLogo.svg";

function Register(props) {
  const { handleRegister } = props;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(password, email, name);
  }

  return (
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
            onChange={handleName}
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
            value={email || ""}
            onChange={handleEmail}
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
            value={password || ""}
            onChange={handlePassword}
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
