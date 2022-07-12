class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_is-visible")
  }

  close() {
    this._popup.classList.remove("popup_is-visible")
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(this._popup);
    }
  }

  setEventListeners()
}
