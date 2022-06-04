const showInputError = (formEl, inputEl, errorMessage, options) => {
  const errorElement = formEl.querySelector(`.${inputEl.id}-input-error`);
  inputEl.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

function resetError(errorElement) {
  errorElement.textContent = "";
}
const hideInputError = (formEl, inputEl, options) => {
  const errorElement = formEl.querySelector(`.${inputEl.id}-input-error`);
  const { inputErrorClass } = options;
  inputEl.classList.remove(inputErrorClass);
  const { errorClass } = options;
  errorElement.classList.remove(errorClass);
  // time delay to allow css transition to show effect
  setTimeout(() => resetError(errorElement), 100);
};

function isValid(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

function disableButton(buttonEl, inactiveButtonClass) {
  buttonEl.classList.add(inactiveButtonClass);
  buttonEl.disabled = true;
}

function enableButton(buttonEl, inactiveButtonClass) {
  buttonEl.classList.remove(inactiveButtonClass);
  buttonEl.disabled = false;
}

function toggleButtonState(inputEls, buttonEl, { inactiveButtonClass }) {
  if (hasInvalidInput(inputEls)) {
    disableButton(buttonEl, inactiveButtonClass);
    return;
  }

  enableButton(buttonEl, inactiveButtonClass);
}

function setEventListeners(formEl, options) {
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

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl, options);
  });
}

enableValidation(config);
