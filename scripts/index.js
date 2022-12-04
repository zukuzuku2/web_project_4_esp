/* Constantes y variables */

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
const elements = document.querySelector(".elements");
const content = document.querySelector(".content");
const profile__name = content.querySelector(".profile__name");
const profile__skills = content.querySelector(".profile__skills");
const editButton = content.querySelector(".profile__edit");
const popupTemplate = document.querySelector("#popup-template").content;
const popup = popupTemplate.querySelector(".popup").cloneNode(true);
const popup__title = popup.querySelector(".popup__title");
const closeButton = popup.querySelector(".popup__close");
const popup__name = popup.querySelector(".popup__name");
const popup__skills = popup.querySelector(".popup__skills");
const popup__button = popup.querySelector(".popup__button");
const profile = document.querySelector(".profile");
const buttonProfile = profile.querySelector(".button");

/* Constantes y variables */

/* Funciones */

function ciclarCards(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    crearCard(arreglo[i]);
  }
}

function crearCard(argumento) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".cards").cloneNode(true);
  const image = card.querySelector(".cards__image");
  const cardTitle = card.querySelector(".cards__title");
  cardTitle.textContent = argumento.name;
  image.setAttribute("src", argumento.link);
  image.setAttribute("alt", "Imagen del " + argumento.name);
  elements.append(card);
}
function crearCardAlPrincipio(argumento) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".cards").cloneNode(true);
  const image = card.querySelector(".cards__image");
  const cardTitle = card.querySelector(".cards__title");
  cardTitle.textContent = argumento.name;
  image.setAttribute("src", argumento.link);
  elements.prepend(card);
}

function popupInsertarCard() {
  popup__title.textContent = "Nuevo Lugar";
  popup__name.setAttribute("placeholder", "Título");
  popup__skills.setAttribute("placeholder", "Enlace a la imagen");
}

function mostrarPopup() {
  content.append(popup);
}

function cambiarValoresProfile() {
  popup__name.value = profile__name.textContent;
  popup__skills.value = profile__skills.textContent;
}

function cerrarPopupX() {
  popup.remove();
}

function guardarInfoCard(evt) {
  evt.preventDefault();
  const arregloDeInfo = {};
  arregloDeInfo.name = popup__name.value;
  arregloDeInfo.link = popup__skills.value;
  crearCardAlPrincipio(arregloDeInfo);
}

function guardarInfo(evt) {
  evt.preventDefault();
  profile__name.textContent = popup__name.value;
  profile__skills.textContent = popup__skills.value;
}

/* Funciones */

/* Eventos */

window.addEventListener("load", ciclarCards(initialCards));
// const cardGlobal = elements.querySelectorAll(".cards");
const cardLike = elements.querySelectorAll("#cards__like");

editButton.addEventListener("click", () => {
  mostrarPopup();
  cambiarValoresProfile();
});
closeButton.addEventListener("click", cerrarPopupX);
popup__button.addEventListener("click", (evt) => {
  if (popup__title.textContent.includes("Nuevo Lugar")) {
    cerrarPopupX();
    guardarInfoCard(evt);
  } else {
    cerrarPopupX();
    guardarInfo(evt);
  }
});

buttonProfile.addEventListener("click", () => {
  mostrarPopup();
  popupInsertarCard();
});

cardLike.forEach((item, count) => {
  cardLike[count].addEventListener("click", (evt) => {
    if (evt.target.getAttribute("src").includes("heartBlack")) {
      evt.target.setAttribute("src", "../images/heart.svg");
      return console.log(elements.querySelectorAll("#cards__like"));
    } else {
      evt.target.setAttribute("src", "../images/heartBlack.png");
    }
  });
});

/* Eventos */
