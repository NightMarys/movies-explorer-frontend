import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useValidation from "../../utils/useValidation";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [successfulMessage, setSuccessfulMessage] = React.useState("");
  const [isCurrentUser, setUserDifference] = React.useState(true);
  const [isEditing, setEditing] = React.useState(false);

  const { formValues, errors, isValid, handleChange, resetForm } =
    useValidation();

  React.useEffect(() => {
    currentUser.name !== formValues.name ||
    currentUser.email !== formValues.email
      ? setUserDifference(false)
      : setUserDifference(true);
  }, [currentUser, formValues]);

  React.useEffect(() => {
    resetForm(currentUser, false);
  }, [resetForm, currentUser]);

  React.useEffect(() => {
    props.onUpdate
      ? setSuccessfulMessage("Ваша информация успешно обновлена.")
      : setSuccessfulMessage("");
  }, [props.onUpdate]);

  function handleEditClick() {
    setSuccessfulMessage("");
    setEditing(!isEditing);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onProfile(formValues.name, formValues.email);
  };

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <ul className="profile__input-list">
            <li className="profile__input-wrapper">
              <label htmlFor="name" className="profile__label">
                Имя
              </label>
              <input
                value={formValues.name || ""}
                onChange={handleChange}
                id="name"
                name="name"
                type="text"
                placeholder="Имя"
                className="profile__input profile__input_data_name"
                required
                minLength="2"
                maxLength="200"
                disabled={isEditing && !props.onLoading ? false : true}
              />
            </li>
            <li className="profile__input-wrapper">
              <label htmlFor="email" className="profile__label">
                E-mail
              </label>
              <input
                value={formValues.email || ""}
                onChange={handleChange}
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="profile__input profile__input_data_email"
                required
                minLength="2"
                maxLength="40"
                disabled={isEditing && !props.onLoading ? false : true}
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
