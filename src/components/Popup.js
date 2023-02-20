export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("hidden");
    this._handleEscClose();
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
