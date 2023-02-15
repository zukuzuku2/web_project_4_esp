import {
  button__Profile,
  popupImageClose,
  content,
  editButton,
  elements,
  profile__name,
  profile__skills,
  formName,
  formSkills,
} from "./constants.js";
import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { popupWithImage } from "../components/PopupWithImage.js";

editButton.addEventListener("click", (evt) => {
  const popup_Profile = content.querySelector(".popup_profile");
  const popup = new PopupWithForm(popup_Profile, () => {});
  popup.open();
  formName.value = profile__name.textContent;
  formSkills.value = profile__skills.textContent;
  popup.setEventListeners();
});

button__Profile.addEventListener("click", (evt) => {
  const popup_Profile = content.querySelector(".popup_add-card");
  const popup = new PopupWithForm(popup_Profile, () => {});
  popup.open();
  popup.setEventListeners();
});

export function handleCardClick(evt) {
  popupWithImage.open(evt);
}

export function addCardPrepend(values, evt) {
  evt.preventDefault();
  const formTitle = values[0].value;
  const formLink = values[1].value;
  const data = [{ name: formTitle, link: formLink }];
  const section = new Section(
    {
      items: data,
      renderer: (item) => {
        const card = new Card(item, ".card-template", handleCardClick);
        const completeCard = card.setCompleteCard();
        section.addItemStart(completeCard);
      },
    },
    elements
  );
  section.renderItems();
  this.close();
}

popupImageClose.addEventListener("click", (evt) => {
  evt.target.parentElement.parentElement.classList.remove("hidden");
});
