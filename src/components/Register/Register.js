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
        <Link className="auth__link_logo" to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <h3 className="auth__input-name">Имя</h3>
          <input
            type="name"
            className="auth__input"
            name="name"
            placeholder="Name"
            required
            minLength="2"
            maxLength="30"
            onChange={handleName}
          />
          <h3 className="auth__input-name">E-mail</h3>
          <input
            type="email"
            className="auth__input"
            name="email"
            placeholder="Email"
            required
            minLength="2"
            maxLength="30"
            value={email || ""}
            onChange={handleEmail}
          />
          <h3 className="auth__input-name">Пароль</h3>
          <input
            type="password"
            className="auth__input"
            id="password-input"
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
          Ещё не зарегистрированы?&nbsp;
          <Link to="/signup" className="auth__link">
            Регистрация
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Register;
