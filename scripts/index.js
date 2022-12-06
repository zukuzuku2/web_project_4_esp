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
 * Genericas
 */
let tipoDeGuardado = false;
/**
 * Contenido Gneral de la pagina
 */
const content = document.querySelector(".content");
/**
 * Popup Editar Perfil
 */
const popup = content.querySelector(".popup");
const closeButton = content.querySelector(".popup__close");
const popup__name = content.querySelector(".popup__name");
const popup__skills = content.querySelector(".popup__skills");
const popup__button = content.querySelector(".popup__button");
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
const popupCards = content.querySelector(".popup-cards");
const button__popupCards = popupCards.querySelector(".popup-cards__button");
const popupCards__close = popupCards.querySelector(".popup-cards__close");
const popupCards__name = popupCards.querySelector(".popup-cards__name");
const popupCards__skills = popupCards.querySelector(".popup-cards__skills");

/**
 * Popup Mostrar imagen ampliada
 */
const popupPlace = content.querySelector(".popup-place");
const popupPlace__image = popupPlace.querySelector(".popup-place__image");
const popupPlace__text = popupPlace.querySelector(".popup-place__text");
const popupPlace__close = popupPlace.querySelector(".popup-place__close");

function insertarCards(arregloDeDatos, tipoDeGuardado) {
  const card__template = document.querySelector(".card-template").content;
  const cards = card__template.querySelector(".cards").cloneNode(true);
  const card__image = cards.querySelector(".cards__image");
  const card__title = cards.querySelector(".cards__title");
  card__image.setAttribute("src", arregloDeDatos.link);
  card__title.textContent = arregloDeDatos.name;
  cards.querySelector(".cards__like").addEventListener("click", (evt) => {
    evt.target.getAttribute("src").includes("blackHeart")
      ? evt.target.setAttribute("src", "../images/heart.svg")
      : evt.target.setAttribute("src", "../images/blackHeart.png");
  });
  cards.querySelector(".cards__delete").addEventListener("click", (evt) => {
    cards.remove(evt.target);
  });

  card__image.addEventListener("click", (evt) => {
    popupPlace.classList.add("hidden");
    popupPlace__image.setAttribute("src", evt.target.getAttribute("src"));
    popupPlace__text.textContent =
      evt.target.parentElement.lastElementChild.firstElementChild.textContent;
    evt.target.parentElement.lastElementChild;
    console.log(
      evt.target.parentElement.lastElementChild.firstElementChild.textContent
    );
  });

  tipoDeGuardado ? elements.prepend(cards) : elements.append(cards);
}

function ciclarCards(objetoDeDatos) {
  objetoDeDatos.forEach((element) => {
    insertarCards(element);
  });
}

function mostrarPopup() {
  popup.classList.add("hidden");
  popup__name.value = profile__name.textContent;
  popup__skills.value = profile__skills.textContent;
}

function cerrarPopupX() {
  popup.classList.remove("hidden");
}

function guardarInfo(evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
  profile__name.textContent = popup__name.value;
  profile__skills.textContent = popup__skills.value;
}

ciclarCards(initialCards);

editButton.addEventListener("click", mostrarPopup);
closeButton.addEventListener("click", cerrarPopupX);
popup__button.addEventListener("click", guardarInfo);
button__Profile.addEventListener("click", (evt) => {
  popupCards.classList.add("hidden");
});
popupCards__close.addEventListener("click", (evt) => {
  popupCards.classList.remove("hidden");
});
button__popupCards.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupCards.classList.remove("hidden");
  insertarCards(
    { name: popupCards__name.value, link: popupCards__skills.value },
    true
  );
  popupCards__name.value = "";
  popupCards__skills.value = "";
});

popupPlace__close.addEventListener("click", (evt) => {
  evt.target.parentElement.parentElement.classList.remove("hidden");
});
