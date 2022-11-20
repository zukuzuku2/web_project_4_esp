const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__edit");
const popup = content.querySelector(".popup");
const closeButton = content.querySelector(".popup__close");
const profile__name = content.querySelector(".profile__name");
const profile__skills = content.querySelector(".profile__skills");
const popup__name = content.querySelector(".popup__name");
const popup__skills = content.querySelector(".popup__skills");
const popup__button = content.querySelector(".popup__button");

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
