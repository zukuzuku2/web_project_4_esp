content = document.querySelector(".content");
editButton = content.querySelector(".profile__edit");
popup = content.querySelector(".popup");
closeButton = content.querySelector(".popup__close");
profile__name = content.querySelector(".profile__name");
profile__skills = content.querySelector(".profile__skills");
popup__name = content.querySelector(".popup__name");
popup__skills = content.querySelector(".popup__skills");
popup__button = content.querySelector(".popup__button");

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
