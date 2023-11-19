import { useState, useCallback } from "react";

const validator = require("validator");

function useValidation() {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const { value, name } = target;

    if (name === "name" && target.validity.patternMismatch && value !== "") {
      target.setCustomValidity(
        "Имя может содержать только латиницу, кириллицу, пробел или дефис."
      );
    } else if (name === "email" && !validator.isEmail(value) && value !== "") {
      target.setCustomValidity("Некорректный email");
    } else {
      target.setCustomValidity("");
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: target.validationMessage,
    });

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newIsValid = false, newErrors = {}) => {
      setFormValues(newValues);
      setIsValid(newIsValid);
      setErrors(newErrors);
    },
    [setFormValues, setErrors, setIsValid]
  );

  return {
    formValues,
    errors,
    setErrors,
    isValid,
    handleChange,
    resetForm,
    setIsValid,
    setFormValues,
  };
}

export default useValidation;
