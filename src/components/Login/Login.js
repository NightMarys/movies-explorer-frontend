import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

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
    <div className="auth">
      <h2 className="auth__title">Рады видеть!</h2>
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
        <Link to="/signin" className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}
export default Login;
