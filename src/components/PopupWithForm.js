import { Popup } from "./Popup";

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
        this._popupSelector.querySelector(".form__submit-text").textContent =
          "Guardando...";
        debugger;
        this.close();
      });

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
