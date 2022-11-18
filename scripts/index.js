let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__edit");
let popup = content.querySelector(".popup");
let closeButton = content.querySelector(".popup__close");
let profile__name = content.querySelector(".profile__name");
let profile__skills = content.querySelector(".profile__skills");
let popup__name = content.querySelector(".popup__name");
let popup__skills = content.querySelector(".popup__skills");
let popup__button = content.querySelector(".popup__button");

function mostrarPopup() {
  popup.classList.remove("hidden");
  popup__name.value = profile__name.textContent;
  popup__skills.value = profile__skills.textContent;
}

function cerrarPopupX() {
  popup.classList.add("hidden");
}

function guardarInfo(evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
  profile__name.textContent = popup__name.value;
  profile__skills.textContent = popup__skills.value;
}

editButton.addEventListener("click", mostrarPopup);
closeButton.addEventListener("click", cerrarPopupX);
popup__button.addEventListener("click", guardarInfo);
