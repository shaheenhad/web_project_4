import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = handleSubmit;
    this._submitButton = this._form.querySelector(".popup__submit-button");
  }

  _getInputValues() {
    const inputEls = this._form.querySelectorAll(".popup__input");
    const inputValues = {};
    inputEls.forEach((inputEl) => {
      inputValues[inputEl.name] = inputEl.value;
    });
    return inputValues;
  }

  close() {
    super.close();
  }

  renderSaving(isSaving) {
    if (isSaving) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this._form.reset();
    });
  }
}

export default PopupWithForm;
