import "../index.css";
import profileSrc from "../images/profile__image.png";
import profileEditSrc from "../images/editButton.png";
import popupClose from "../images/closeIcon.svg";
import { FormValidator } from "../components/FormValidator.js";
import {
  initialCards,
  elements,
  selectors,
  popupAddCard,
  popupProfile,
  profile__Image,
  editButton,
  popupsClose,
} from "../utils/constants.js";
import { addCardPrepend, handleCardClick } from "../utils/utils.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm";
import { userInfo } from "../components/UserInfo";

profile__Image.src = profileSrc;
editButton.src = profileEditSrc;
popupsClose.forEach((close) => {
  close.src = popupClose;
});

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card-template", handleCardClick);
      const completeCard = card.setCompleteCard();
      section.addItem(completeCard);
    },
  },
  elements
);
section.renderItems();

const popupWithForm = new PopupWithForm(popupAddCard, addCardPrepend);

const popupWithFormProfile = new PopupWithForm(popupProfile, (inputValues) => {
  userInfo.setUserInfo(inputValues[0].value, inputValues[1].value);
  popupWithFormProfile.close();
});

const validator = new FormValidator(selectors);
validator.enableValidation();
