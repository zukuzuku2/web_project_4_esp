import { FormValidator } from "./FormValidator.js";
import {
  initialCards,
  elements,
  evtEditarPerfil,
  evtOpenModalAgregarCard,
  evtClosePopus,
  cerrarPopupsConTeclaYClickFueraDelModal,
  selectors,
  evtAgregarCard,
} from "./utils.js";
import { Card } from "./Card.js";

initialCards.forEach((element) => {
  const card = new Card(element, ".card-template");
  elements.append(card.setCompleteCard());
});

const validator = new FormValidator(selectors);
Array.from(document.querySelectorAll(".form")).forEach((elemento) => {
  elemento.addEventListener("input", (evt) => {
    validator.enableValidation();
  });
});
validator.enableValidation();
evtEditarPerfil();
evtOpenModalAgregarCard();
evtClosePopus();
cerrarPopupsConTeclaYClickFueraDelModal();
evtAgregarCard();
