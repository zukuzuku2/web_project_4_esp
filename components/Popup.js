import {
  popup_Image,
  profile__name,
  profile__skills,
} from "../utils/constants.js";
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("hidden");
  }

  close() {
    this._popupSelector.classList.remove("hidden");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    this._popupSelector
      .querySelector(".form__close")
      .addEventListener("click", () => {
        this.close();
      });

    document.addEventListener("click", (evt) => {
      if (evt.target.className === "overlay") {
        this.close();
      }
    });
  }
}

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
  }

  open(evt) {
    super.open();
    this._popupSelector.firstElementChild.firstElementChild.nextElementSibling.setAttribute(
      "src",
      evt.target.getAttribute("src")
    );
    this._popupSelector.firstElementChild.lastElementChild.textContent =
      evt.target.nextElementSibling.textContent;
  }
}

export class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._callback = callback.bind(this);
    this.setEventListeners();
  }
  _getInputValues() {
    return Array.from(this._popupSelector.querySelectorAll(".form__input"));
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this._popupSelector
      .querySelector(".form")
      .addEventListener("submit", (evt) => {
        this._callback(this._getInputValues(), evt);
      });
    // this._callback
    //   .querySelector(".form__submit")
    //   .addEventListener("click", (evt) => {
    //     evt.preventDefault();
    //     const formTitle = document.getElementById("form-title").value;
    //     const formLink = document.getElementById("form-link").value;
    //     const data = { name: formTitle, link: formLink };
    //     const section = new Section({
    //       data,
    //       renderer: (item) => {
    //         const card = new Card(item, ".card-template");
    //         const completeCard = card.setCompleteCard();
    //         section.addItem(completeCard);
    //       },
    //     });
    //     super.close();
    //   });

    this._popupSelector
      .querySelector(".form__close")
      .addEventListener("click", () => {
        super.close();
      });
  }

  close() {
    super.close();
    this._popupSelector.querySelector(".form").reset();
  }
}

export class UserInfo {
  constructor(name, skills) {
    this._name = name;
    this._skills = skills;
  }

  getUserInfo() {
    return { name: this._name.textContent, job: this._skills.textContent };
  }

  setUserInfo(newName, newSkills) {
    this._name.textContent = newName;
    this._skills.textContent = newSkills;
  }
}

export const userInfo = new UserInfo(profile__name, profile__skills);
export const popupWithImage = new PopupWithImage(popup_Image);
