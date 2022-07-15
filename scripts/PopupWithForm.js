import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this.close = this.close.bind(this);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
  }

  _getInputValues() {
    this._inputEls = Array.from(this._form.querySelectorAll(".popup__input"));
    const inputValues = {};
    this._inputEls.forEach((inputEl) => {
      inputValues[inputEl.id] = inputEl.value;
    });
    return inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

export default PopupWithForm;
