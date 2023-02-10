import heartSrc from "../images/heart.svg";
import blackHeartSrc from "../images/blackHeart.png";
import deleteCardSrc from "../images/delete.svg";
let marca = 0;
export class Card {
  constructor(data, selector, callback) {
    this.name = data.name;
    this.link = data.link;
    this.selector = selector;
    this._callback = callback;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".cards")
      .cloneNode(true);
    cardElement.querySelector(".cards__like-image").src = heartSrc;
    cardElement.querySelector(".cards__delete-image").src = deleteCardSrc;
    return cardElement;
  }

  _setEventListener() {
    this.element
      .querySelector(".cards__like-image")
      .addEventListener("click", (evt) => {
        this._eventStatusHeart(evt);
      });

    this.element
      .querySelector(".cards__delete")
      .addEventListener("click", (evt) => {
        this._eventDeleteCard();
      });

    this.element
      .querySelector(".cards__image")
      .addEventListener("click", (evt) => {
        this._callback(evt);
      });
  }

  _eventStatusHeart(evt) {
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
