import React from "react";
import { Link } from "react-router-dom";
import "../Register/Register.css";
import logo from "../../images/HeaderLogo.svg";

function Login(props) {
  const { setLoggedIn } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoggedIn(password, email);
  }

  return (
    <main className="content">
      <div className="auth">
        <Link className="auth__link_logo" to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
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
            Войти
          </button>
        </form>
        <p className="auth__text">
          Уже зарегистрированы?
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Login;
