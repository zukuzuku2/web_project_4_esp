import { FormValidator } from "./FormValidator.js";
import {
  initialCards,
  elements,
  evtOpenModalAgregarCard,
  evtClosePopus,
  cerrarPopupsConTeclaYClickFueraDelModal,
  selectors,
  evtAgregarCard,
} from "./utils.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card-template");
      const completeCard = card.setCompleteCard();
      console.log(completeCard);
      section.addItem(completeCard);
    },
  },
  elements
);
section.renderItems();

const validator = new FormValidator(selectors);
validator.enableValidation();
evtOpenModalAgregarCard();
evtClosePopus();
cerrarPopupsConTeclaYClickFueraDelModal();
evtAgregarCard();
