import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <main className="content">
      <div className="error">
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">Страница не найдена</h2>
        <Link className="error__link" to="/">
          {" "}
          Назад
        </Link>
      </div>
    </main>
  );
}

export default Error;
