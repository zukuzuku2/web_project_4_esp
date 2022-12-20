enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
});

const formElement = Array.from(document.querySelectorAll(".form"))[1];
const formInput = formElement.querySelector(".form__input");
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", function () {
  checkInputValidity(form, formInput);
});

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__submit");
  console.log(formElement);
  console.log(buttonElement);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(buttonElement);
  try {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("button_inactive");
    } else {
      buttonElement.classList.remove("button_inactive");
    }
  } catch (error) {
    console.log(error);
  }
};

enableValidation();
/**
 * 
 * 
// Escribe el código de la primera función, que muestra el elemento erróneo
const showInputError = (element) => {
  element.classList.add("form__input_type_error");
};

// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
};

// Escribe el código de la tercera función, que comprueba si el campo es válido
const isValid = () => {
  if (!formInput.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showInputError(formInput);
  } else {
    // Si es válido, oculta el elemento erróneo
    hideInputError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
  evt.preventDefault();
});

// Llama a la función isValid() para cada entrada de caracteres
formInput.addEventListener("Input se ejecuta", isValid);
 */
