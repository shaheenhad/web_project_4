class FormValidator {
  constructor(settings, formElement) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _setEventListeners() {
    const { inputSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const { submitButtonSelector } = options;
    const buttonEl = formEl.querySelector(submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        isValid(formEl, inputEl, options);

        toggleButtonState(inputEls, buttonEl, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListner("submit", (evt) => {
      evt.preventDefault();
    });
  }
}
