class FormValidator {
  constructor(settings, formElement) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _showInputError(inputEl, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputEl.id}-input-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _resetError(errorElement) {
    errorElement.textContent = "";
  }

  _hideInputError(inputEl) {
    const errorElement = this._form.querySelector(`.${inputEl.id}-input-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    // time delay to allow css transition to show effect
    setTimeout(() => this._resetError(errorElement), 100);
  }

  _isValid(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  _disableButton() {
    this._buttonEl.classList.add(this._inactiveButtonClass);
    this._buttonEl.disabled = true;
  }

  _enableButton() {
    this._buttonEl.classList.remove(this._inactiveButtonClass);
    this._buttonEl.disabled = false;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputEls)) {
      this._disableButton();
      return;
    }
    this._enableButton();
  }

  _setEventListeners() {
    this._inputEls = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonEl = this._form.querySelector(this._submitButtonSelector);
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._isValid(inputEl);

        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._disableButton();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
