import { popup_Image } from "../utils/constants";
import { Popup } from "./Popup";

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

export const popupWithImage = new PopupWithImage(popup_Image);
