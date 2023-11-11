import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = ({ onSubmit }) => {
  // const currentUser = React.useContext(CurrentUserContext);
  const [value, setValue] = React.useState({});
  // const navigate = useNavigate();

  function handleChange(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }
  /*
  const onSignOut = () => {
    setLoggedIn(false);
    navigate("/", { replace: true });
  };
*/

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, !</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <ul className="profile__input-list">
          <li className="profile__input-wrapper">
            <h3 className="profile__input-name">Имя</h3>
            <input
              value={value.name || ""}
              onChange={handleChange}
              id="name-input"
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
            <h3 className="profile__input-name">E-mail</h3>
            <input
              value={value.email || ""}
              onChange={handleChange}
              id="email-input"
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
  );
};

export default Profile;
