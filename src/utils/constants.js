export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const selectors = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

/**
 * Contenido Gneral de la pagina
 */
export const content = document.querySelector(".content");
export const close__Popus = Array.from(
  content.querySelectorAll(".form__close")
);
export const popups = Array.from(content.querySelectorAll(".popup"));
export const elements = content.querySelector(".elements");
export const headerPic = document.querySelector(".header__pic");

/**
 * Section Editar Perfil
 */
export const profile = content.querySelector(".profile");
export const editButton = content.querySelector(".profile__edit-button");
export const profile__name = profile.querySelector(".profile__name");
export const profile__skills = profile.querySelector(".profile__skills");
export const button__Profile = profile.querySelector(".button");
export const profile__Image = profile.querySelector(".profile__image");

export const formProfile = content.querySelector(".form_profile");
export const popupAddCard = content.querySelector(".popup_add-card");
export const popupProfile = content.querySelector(".popup_profile");
export const popup_Image = content.querySelector(".popup_image");
export const popupsClose = Array.from(content.querySelectorAll(".form__close"));
export const popupImageClose = content.querySelector(".popup__close");

export const formName = document.getElementById("form-name");
export const formSkills = document.getElementById("form-skills");

export const ctdadLikes = document.querySelectorAll(".cards__counters");
export const popupDelete = document.querySelector(".popup_delete");
export const popupEditProfile = document.querySelector(".profile__image");
