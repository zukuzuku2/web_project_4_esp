import heartSrc from "../images/heart.svg";
import blackHeartSrc from "../images/blackHeart.png";
import deleteCardSrc from "../images/delete.svg";
import { PopupWithForm } from "./PopupWithForm";
import { popupDelete } from "../utils/constants";
import Api from "./Api";

const api = new Api({
  token: "590c9c0f-0cfb-43a1-be02-96b36cadf695",
  url: "https://around.nomoreparties.co/v1/web_es_cohort_04",
});

export class Card {
  constructor(data, selector, callback, user = {}) {
    this._user = user;
    this._cardData = data;
    this.name = data.name;
    this.link = data.link;
    this._id = data.owner._id;
    this._cardId = data._id;
    this.selector = selector;
    this._callbackClick = callback;
    this._marca = 0;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".cards")
      .cloneNode(true);
    cardElement.querySelector(".cards__like-image").src = heartSrc;
    if (this._id === this._user._id) {
      cardElement.querySelector(".cards__delete-image").src = deleteCardSrc;
    } else {
      cardElement.querySelector(".cards__delete").classList.add("visibility");
      //    );
    }

    if (
      this._cardData.likes.some((owners) => {
        return owners._id === this._user._id;
      })
    ) {
      cardElement
        .querySelector(".cards__like-image")
        .setAttribute("src", blackHeartSrc);
    } else {
      cardElement
        .querySelector(".cards__like-image")
        .setAttribute("src", heartSrc);
    }

    cardElement.querySelector(".cards__counters").textContent =
      this._cardData.likes.length;
    return cardElement;
  }

  _setEventListener() {
    this.element
      .querySelector(".cards__like-image")
      .addEventListener("click", (evt) => {
        const hasLike = this._cardData.likes.some((owners) => {
          return owners._id == this._user._id;
        });
        console.log(hasLike);
        if (!hasLike) {
          evt.target.setAttribute("src", blackHeartSrc);
          api.updateLike(this._cardData._id).then((cardResponse) => {
            this._cardData.likes = cardResponse.likes;
            this.element.querySelector(".cards__counters").textContent =
              this._cardData.likes.length;
          });
        } else {
          evt.target.setAttribute("src", heartSrc);
          api.removeLike(this._cardData._id).then((cardResponse) => {
            this._cardData.likes = cardResponse.likes;
            this.element.querySelector(".cards__counters").textContent =
              this._cardData.likes.length;
          });
        }
      });

    this.element
      .querySelector(".cards__delete")
      .addEventListener("click", (evt) => {
        const popup = new PopupWithForm(popupDelete, () => {
          api
            .deleteCards(this._cardId)
            .then((res) => evt.target.parentElement.parentElement.remove())
            .finally(() => {
              Array.from(
                document.querySelectorAll(".form__submit-text")
              ).forEach((element) => {
                element.textContent = "Guardar";
              });
              document.querySelector(".form__submit-createText").textContent =
                "Crear";
            });
        });
        popup.open();
        popup.setEventListeners();
      });

    this.element
      .querySelector(".cards__image")
      .addEventListener("click", (evt) => {
        this._callbackClick(evt);
      });
  }

  _eventStatusHeart(evt) {
    if (this._marca === 0) {
      evt.target.setAttribute("src", blackHeartSrc);
      this._marca = 1;
    } else {
      evt.target.setAttribute("src", heartSrc);
      this._marca = 0;
    }
  }

  _eventDeleteCard() {
    this.element.remove();
  }

  setCompleteCard() {
    this.element = this._getTemplate();
    this.element.querySelector(".cards__image").setAttribute("src", this.link);
    this.element.querySelector(".cards__title").textContent = this.name;
    this._setEventListener();
    return this.element;
  }
}
