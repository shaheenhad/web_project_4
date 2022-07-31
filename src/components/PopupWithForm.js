import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = handleSubmit;
    this._submitButton = this._form.querySelector(".popup__submit-button");
    this._submitButtonText = this._submitButton.textContent;
    this._inputs = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((inputEl) => {
      inputValues[inputEl.name] = inputEl.value;
    });
    return inputValues;
  }

  open() {
    super.open();
    this._submitButton.setAttribute.disabled = true;
    this._submitButton.classList.add("popup__submit-button_disabled");
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }
}

export default PopupWithForm;
