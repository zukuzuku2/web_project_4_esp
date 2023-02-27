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
  ctdadLikes,
  popupDelete,
  popupEditProfile,
} from "./constants.js";
import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { popupWithImage } from "../components/PopupWithImage.js";
import { Api } from "../components/Api.js";
import heartSrc from "../images/heart.svg";
import blackHeartSrc from "../images/blackHeart.png";
let count = 0;

const api = new Api({
  token: "590c9c0f-0cfb-43a1-be02-96b36cadf695",
  url: "https://around.nomoreparties.co/v1/web_es_cohort_04",
});

export function init() {
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

  popupImageClose.addEventListener("click", (evt) => {
    evt.target.parentElement.parentElement.classList.remove("hidden");
  });

  popupEditProfile.addEventListener("click", (evt) => {
    count = 0;
    const popupEdit_Profile = content.querySelector(".popup_edit-profile");
    const popup = new PopupWithForm(popupEdit_Profile, () => {
      const profilePhoto = document.querySelector(".profile__image");
      if (count === 0) {
        const valueInput = popupEdit_Profile
          .querySelector(".form")
          .querySelector(".form__input").value;
        api
          .updateProfilePhoto({
            avatar: valueInput,
          })
          .then((res) => {
            console.log(valueInput);
            console.log(res);
            console.log(typeof valueInput);
            evt.target.src = valueInput;
          });
        count++;
      } else {
      }
    });
    popup.open();
    popup.setEventListeners();
  });
}

export function controllerHearts() {
  setTimeout(() => {
    api.like().then((res) => {
      console.log(res);
      res.some;
    });
  }, 1500);
}

export function handleCardClick(evt) {
  popupWithImage.open(evt);
}

export function addCardPrepend(values, evt) {
  evt.preventDefault();
  const formTitle = values[0].value;
  const formLink = values[1].value;
  const respApi = api.getUserInfo().then((res) => {
    const data = [
      { name: formTitle, link: formLink, owner: { _id: res._id }, likes: 0 },
    ];
    api.addCard({ name: formTitle, link: formLink, owner: res.owner });
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
  });
  this.close();
}
