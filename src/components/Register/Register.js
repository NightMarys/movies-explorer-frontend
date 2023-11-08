import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

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
    <div className="auth">
      <h2 className="auth__title">Добро пожаловать!</h2>
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
        <Link to="/signin" className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}
export default Register;