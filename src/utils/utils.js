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

import {
  button__Profile,
  close__Popus,
  content,
  editButton,
  elements,
  profile__name,
  profile__skills,
} from "./constants.js";
import {
  Popup,
  UserInfo,
  PopupWithForm,
  popupWithImage,
} from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";

editButton.addEventListener("click", (evt) => {
  const popup_Profile = content.querySelector(".popup_profile");
  const popup = new PopupWithForm(popup_Profile, () => {});
  popup.open();
  popup.setEventListeners();
});

button__Profile.addEventListener("click", (evt) => {
  const popup_Profile = content.querySelector(".popup_add-card");
  const formName = document.getElementById("form-name").value;
  const formSkill = document.getElementById("form-skills").value;
  const user = new UserInfo({ name: formName, skills: formSkill });
  const popup = new PopupWithForm(popup_Profile, () => {});
  popup.open();
  popup.setEventListeners();
});

close__Popus.forEach((element) => {
  element.addEventListener("click", () => {
    const popup_Profile = content.querySelector(".popup");
    const popup = new Popup(popup_Profile);
    popup.close();
  });
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
        console.log(item);
        const completeCard = card.setCompleteCard();
        section.addItemStart(completeCard);
      },
    },
    elements
  );
  section.renderItems();
  this.close();
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
