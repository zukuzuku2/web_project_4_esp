import "../index.css";
import profileSrc from "../images/profile__image.png";
import profileEditSrc from "../images/editButton.png";
import headerSrc from "../images/Header.svg";
import popupClose from "../images/closeIcon.svg";
import popupImageCloseButton from "../images/closeIcon.svg";
import { FormValidator } from "../components/FormValidator.js";
import {
  elements,
  selectors,
  popupAddCard,
  popupProfile,
  profile__Image,
  editButton,
  popupsClose,
  headerPic,
  popupImageClose,
} from "../utils/constants.js";
import {
  addCardPrepend,
  handleCardClick,
  init,
  controllerHearts,
} from "../utils/utils.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { Api } from "../components/Api";
headerPic.src = headerSrc;
popupImageClose.src = popupImageCloseButton;
profile__Image.src = profileSrc;
editButton.src = profileEditSrc;
popupsClose.forEach((close) => {
  close.src = popupClose;
});

const api = new Api({
  token: "590c9c0f-0cfb-43a1-be02-96b36cadf695",
  url: "https://around.nomoreparties.co/v1/web_es_cohort_04",
});

api.getCards().then((cardResult) => {
  const section = new Section(
    {
      items: cardResult,
      renderer: (item) => {
        const card = new Card(item, ".card-template", handleCardClick);
        const completeCard = card.setCompleteCard();
        section.addItem(completeCard);
      },
    },
    elements
  );
  section.renderItems();
});

api.getUserInfo().then((result) => {
  const userInfo = new UserInfo(
    result.name,
    result.about,
    result.avatar,
    "#profile"
  );
  userInfo.render();
  const popupWithFormProfile = new PopupWithForm(
    popupProfile,
    (inputValues) => {
      api.updateUserInfo({
        name: inputValues[0].value,
        about: inputValues[1].value,
        avatar:
          "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
      });
      userInfo.setUserInfo(inputValues[0].value, inputValues[1].value);
      popupWithFormProfile.close();
    }
  );
});

const popupWithForm = new PopupWithForm(popupAddCard, addCardPrepend);

const validator = new FormValidator(selectors);
validator.enableValidation();

init();
controllerHearts();
