import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    console.log("go back");
    navigate(-1);
  };
  return (
    <main className="content">
      <div className="error">
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">Страница не найдена</h2>
        <button className="error__btn" onClick={handleGoBack} type="button">
          Назад
        </button>
      </div>
    </main>
  );
}

export default Error;
