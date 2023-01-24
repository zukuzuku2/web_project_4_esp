import { popups } from "./utils.js";

export class Card {
  constructor(data, selector) {
    this.name = data.name;
    this.link = data.link;
    this.selector = selector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".cards")
      .cloneNode(true);
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
        this._eventPopupImage(evt);
      });
  }

  _eventStatusHeart(evt) {
    evt.target.getAttribute("src").includes("blackHeart")
      ? evt.target.setAttribute("src", "./images/heart.svg")
      : evt.target.setAttribute("src", "./images/blackHeart.png");
  }

  _eventDeleteCard() {
    this.element.remove();
  }

  _eventPopupImage(evt) {
    popups[0].classList.add("hidden");
    popups[0].firstElementChild.firstElementChild.nextElementSibling.setAttribute(
      "src",
      evt.target.getAttribute("src")
    );
    popups[0].firstElementChild.lastElementChild.textContent =
      evt.target.nextElementSibling.textContent;
  }

  setCompleteCard() {
    this.element = this._getTemplate();
    this.element.querySelector(".cards__image").setAttribute("src", this.link);
    this.element.querySelector(".cards__title").textContent = this.name;
    this._setEventListener();
    return this.element;
  }
}
