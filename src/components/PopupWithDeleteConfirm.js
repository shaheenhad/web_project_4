import Popup from "./Popup";

class PopupWithDeleteConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = handleSubmit;
    this._submitButton = this._form.querySelector(".popup__submit-button");
  }

  open(card) {
    super.open();
    this._card = card;
  }

  renderSaving(isSaving, formType) {
    super.renderSaving(isSaving, formType);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit(this._card);
    });
  }
}

export default PopupWithDeleteConfirm;
