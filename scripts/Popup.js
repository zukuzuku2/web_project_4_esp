import { popups, close__Popus, content } from "./utils.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
export class Popup {
  constructor(popupSelector, position) {
    this._popupSelector = popupSelector;
    this._position = position;
  }

  open() {
    popups[this._position].classList.add("hidden");
  }

  close() {
    popups.forEach((popupElement) => {
      popupElement.classList.remove("hidden");
    });
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    close__Popus.forEach((element) => {
      element.addEventListener("click", () => {
        this.close();
      });
    });

    document.addEventListener("click", (evt) => {
      if (evt.target.className === "overlay") {
        this.close();
      }
    });
  }
}

export class PopupWithImage extends Popup {
  constructor(popupSelector, position) {
    super(popupSelector, position);
    this._popupSelector = popupSelector;
    this._position = position;
  }

  open(evt) {
    super.open();
    this._popupSelector[
      this._position
    ].firstElementChild.firstElementChild.nextElementSibling.setAttribute(
      "src",
      evt.target.getAttribute("src")
    );
    popups[this._position].firstElementChild.lastElementChild.textContent =
      evt.target.nextElementSibling.textContent;
  }
}

export class PopupWithForm extends Popup {
  constructor(callback, position) {
    console.log(callback);
    super(callback, position);
    this._callback = callback;
  }
  _getInputValues() {
    const datos = [];
    const inputs = Array.from(this._callback.querySelectorAll(".form__input"));
    for (let i = 0; i < inputs.length; i++) {
      datos[i] = inputs[i];
      return datos;
    }
  }

  setEventListeners() {
    // super.setEventListeners();
    this._callback
      .querySelector(".form__submit")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        const formTitle = document.getElementById("form-title").value;
        const formLink = document.getElementById("form-link").value;
        const data = { name: formTitle, link: formLink };
        const section = new Section({
          data,
          renderer: (item) => {
            const card = new Card(item, ".card-template");
            const completeCard = card.setCompleteCard();
            console.log(completeCard);
            section.addItem(completeCard);
          },
        });
        super.close();
      });

    close__Popus.forEach((element) => {
      element.addEventListener("click", () => {
        super.close();
      });
    });
  }

  close() {
    super.close;
    this._callback.reset();
  }
}

export class UserInfo {
  constructor({ name, skills }) {
    this._name = name;
    this._skills = skills;
  }

  getUserInfo() {
    return { name: this._name, skills: this._skills };
  }

  setUserInfo() {}
}
