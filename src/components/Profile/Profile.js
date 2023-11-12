import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile() {
  // const currentUser = React.useContext(CurrentUserContext);
  // const [value, setValue] = React.useState({});
  // const navigate = useNavigate();
  /*
  function handleChange(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }
  
  const onSignOut = () => {
    setLoggedIn(false);
    navigate("/", { replace: true });
  };
*/

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, !</h1>
        <form
          className="profile__form"
          // onSubmit={handleSubmit}
        >
          <ul className="profile__input-list">
            <li className="profile__input-wrapper">
              <label htmlFor="name" className="profile__label">
                Имя
              </label>
              <input
                // value={value.name || ""}
                // onChange={handleChange}
                id="name"
                name="name"
                type="text"
                placeholder="Имя"
                className="profile__input profile__input_data_name"
                required
                minLength="2"
                maxLength="200"
              />
            </li>
            <li className="profile__input-wrapper">
              <label htmlFor="email" className="profile__label">
                E-mail
              </label>
              <input
                // value={value.email || ""}
                //  onChange={handleChange}
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="profile__input profile__input_data_email"
                required
                minLength="2"
                maxLength="40"
              />
            </li>
          </ul>
          <button
            className="profile__button-save"
            type="submit"
            aria-label="saveButton"
          >
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__submit-button">
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
