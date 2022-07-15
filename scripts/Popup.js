class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add("popup_is-visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_is-visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(this._popup);
    }
  }

  setEventListeners() {
    this._popupCloseButton = this._popup.querySelector(".popup__close");
    this._popupCloseButton.addEventListener("click", this.close);
    document.addEventListener("mousedown", (evt) => {
      if (evt.target.matches(".popup")) {
        this.close();
      }
    });
  }
}

export default Popup;
