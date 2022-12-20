/**
 * Genericas
 */
let tipoDeGuardado = false;
const initialCards = [
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
/**
 * Contenido Gneral de la pagina
 */
const content = document.querySelector(".content");
const popups = Array.from(content.querySelectorAll(".popup"));
/**
 * Popup Editar Perfil
 */
/**
 * Section Editar Perfil
 */
const profile = content.querySelector(".profile");
const editButton = content.querySelector(".profile__edit");
const profile__name = profile.querySelector(".profile__name");
const profile__skills = profile.querySelector(".profile__skills");
const button__Profile = profile.querySelector(".button");
/**
 * Section Elements
 */
const elements = content.querySelector(".elements");
/**
 * Popup insertar cards
 */
// const popupCards = content.querySelector(".popup-cards");
// const button__popupCards = popupCards.querySelector(".form__submit");
// const popupCards__close = popupCards.querySelector(".form__close");
// const popupCards__name = popupCards.querySelector("#form-card-name");
// const popupCards__skills = popupCards.querySelector("#form-cards-skills");

/**
 * Popup Mostrar imagen ampliada
 */
// const popupPlace = content.querySelector(".popup-place");
// const popupPlace__image = popupPlace.querySelector(".popup-place__image");
// const popupPlace__text = popupPlace.querySelector(".popup-place__text");
// const popupPlace__close = popupPlace.querySelector(".popup-place__close");

/**
 *Funciones
 */

function insertarCards(arregloDeDatos, tipoDeGuardado) {
  const card__template = document.querySelector(".card-template").content;
  const cards = card__template.querySelector(".cards").cloneNode(true);
  const card__image = cards.querySelector(".cards__image");
  const card__title = cards.querySelector(".cards__title");
  card__image.setAttribute("src", arregloDeDatos.link);
  card__title.textContent = arregloDeDatos.name;
  cards
    .querySelector(".cards__like")
    .firstElementChild.addEventListener("click", (evt) => {
      evt.target.getAttribute("src").includes("blackHeart")
        ? evt.target.setAttribute("src", "../images/heart.svg")
        : evt.target.setAttribute("src", "../images/blackHeart.png");
    });
  cards.querySelector(".cards__delete").addEventListener("click", (evt) => {
    cards.remove(evt.target);
  });

  card__image.addEventListener("click", (evt) => {
    if (evt.target.className === "cards__image") {
      popups[0].classList.add("hidden");
      popups[0].firstElementChild.firstElementChild.nextElementSibling.setAttribute(
        "src",
        evt.target.getAttribute("src")
      );
      popups[0].firstElementChild.lastElementChild.textContent =
        evt.target.nextElementSibling.textContent;
    }
  });

  tipoDeGuardado ? elements.prepend(cards) : elements.append(cards);
}

function ciclarCards(objetoDeDatos) {
  objetoDeDatos.forEach((element) => {
    insertarCards(element);
  });
}

function mostrarPopup() {
  popups[1].classList.add("hidden");
  const popup__name = content.querySelector("#form-name");
  const popup__skills = content.querySelector("#form-skills");
  popup__name.value = profile__name.textContent;
  popup__skills.value = profile__skills.textContent;
}

function cerrarPopups() {
  const formTitle = document.getElementById("form-title");
  const formLink = document.getElementById("form-link");
  popups.forEach((popupElement) => {
    popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.className === "form__close" ||
        evt.target.classList.contains("form__close-image")
      ) {
        evt.target.closest(".popup").classList.remove("hidden");
      }
    });
    popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault;
      console.log(evt.target.lastElementChild.classList);
      if (
        evt.target.lastElementChild.classList.contains("form__submit-crear")
      ) {
        evt.target.closest(".popup").classList.remove("hidden");
        insertarCards(
          {
            name: formTitle.value,
            link: formLink.value,
          },
          true
        );
        formTitle.value = "";
        formLink.value = "";
      } else {
        evt.target.closest(".popup").classList.remove("hidden");
        const formInputs = Array.from(
          evt.target.closest(".popup").querySelectorAll(".form__input")
        );
        profile__name.textContent = formInputs[0].value;
        profile__skills.textContent = formInputs[1].value;
      }
    });
  });
}

ciclarCards(initialCards);
cerrarPopups();

/**
 * Eventos
 */

editButton.addEventListener("click", mostrarPopup);
button__Profile.addEventListener("click", (evt) => {
  popups[2].classList.add("hidden");
});
