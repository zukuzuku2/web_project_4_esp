import { Card } from "./Card.js";
import { PopupWithForm } from "./Popup.js";

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

/**
 * Section Editar Perfil
 */
const profile = content.querySelector(".profile");
export const editButton = content.querySelector(".profile__edit");
const profile__name = profile.querySelector(".profile__name");
const profile__skills = profile.querySelector(".profile__skills");
export const button__Profile = profile.querySelector(".button");

function openPopus(posicion) {
  popups[posicion].classList.add("hidden");
}

function closePopup() {
  Array.from(document.querySelectorAll(".popup")).forEach((popupElement) => {
    popupElement.classList.remove("hidden");
  });
}

// export function evtEditarPerfil() {
//   editButton.addEventListener("click", (evt) => {
//     const popup__name = content.querySelector(`#form-name`);
//     const popup__skills = content.querySelector(`#form-skills`);
//     popup__name.value = profile__name.textContent;
//     popup__skills.value = profile__skills.textContent;
//     openPopus(1);
//     evtmodificarPerfilBtn();
//   });
// }

editButton.addEventListener("click", (evt) => {
  const popup = new PopupWithForm((evt) => {
    return popups[0];
  }, 1);
  popup.open();
  popup.setEventListeners();
});

export function evtOpenModalAgregarCard() {
  button__Profile.addEventListener("click", (evt) => {
    openPopus(2);
  });
}

export function evtClosePopus() {
  close__Popus.forEach((element) => {
    element.addEventListener("click", () => {
      closePopup();
    });
  });
}

export function cerrarPopupsConTeclaYClickFueraDelModal() {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup();
    }
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.className === "overlay") {
      closePopup();
    }
  });
}

export function evtAgregarCard() {
  Array.from(content.querySelectorAll(".form__submit"))[1].addEventListener(
    "click",
    (evt) => {
      evt.preventDefault();
      const formTitle = document.getElementById("form-title").value;
      const formLink = document.getElementById("form-link").value;
      const data = { name: formTitle, link: formLink };
      const card = new Card(data, ".card-template");
      elements.prepend(card.setCompleteCard());
      closePopup();
    }
  );
}

export function evtmodificarPerfilBtn() {
  Array.from(content.querySelectorAll(".form__submit"))[0].addEventListener(
    "click",
    (evt) => {
      evt.preventDefault();
      profile__name.textContent = document.getElementById("form-name").value;
      profile__skills.textContent =
        document.getElementById("form-skills").value;
      closePopup();
    }
  );
}
