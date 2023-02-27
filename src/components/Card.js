import heartSrc from "../images/heart.svg";
import blackHeartSrc from "../images/blackHeart.png";
import deleteCardSrc from "../images/delete.svg";
import { PopupWithForm } from "./PopupWithForm";
import { popupDelete } from "../utils/constants";
import { Api } from "./Api";
let marca = 0;

const api = new Api({
  token: "590c9c0f-0cfb-43a1-be02-96b36cadf695",
  url: "https://around.nomoreparties.co/v1/web_es_cohort_04",
});

export class Card {
  constructor(data, selector, callback) {
    this._data = data;
    this.name = data.name;
    this.link = data.link;
    this._id = data.owner._id;
    this._cardId = data._id;
    this.selector = selector;
    this._callback = callback;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".cards")
      .cloneNode(true);
    cardElement.querySelector(".cards__like-image").src = heartSrc;
    const responseApi = api.getUserInfo().then((res) => {
      if (this._id === res._id) {
        cardElement.querySelector(".cards__delete-image").src = deleteCardSrc;
      } else {
        const eliminarNode = cardElement.removeChild(
          cardElement.querySelector(".cards__delete")
        );
      }
    });
    cardElement.querySelector(".cards__counters").textContent =
      this._data.likes.length;
    return cardElement;
  }

  _setEventListener() {
    this.element
      .querySelector(".cards__like-image")
      .addEventListener("click", (evt) => {
        api.getUserInfo().then((res) => {
          if (
            this._data.likes.some(function (owners) {
              return owners._id === res._id;
            })
          ) {
            evt.target.setAttribute("src", blackHeartSrc);
          } else {
            evt.target.setAttribute("src", heartSrc);
            // evt.target.setAttribute("src", blackHeartSrc);
          }
        });
        // this._eventStatusHeart(evt);
      });

    this.element
      .querySelector(".cards__delete")
      .addEventListener("click", (evt) => {
        const popup = new PopupWithForm(popupDelete, () => {
          api
            .deleteCards(this._cardId)
            .then((res) => evt.target.parentElement.parentElement.remove());
        });
        popup.open();
        popup.setEventListeners();
      });

    this.element
      .querySelector(".cards__image")
      .addEventListener("click", (evt) => {
        this._callback(evt);
      });
  }

  _eventStatusHeart(evt) {
    // if (owner.id === miID) {
    this.element.src = blackHeartSrc;
    // }
    if (marca === 0) {
      evt.target.setAttribute("src", blackHeartSrc);
      marca = 1;
    } else {
      evt.target.setAttribute("src", heartSrc);
      marca = 0;
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
