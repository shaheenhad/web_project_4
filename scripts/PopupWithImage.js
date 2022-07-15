import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector, title, link) {
    super(popupSelector);
    this._title = title;
    this._link = link;
    this.open = this.open.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    super.open();
    this._imagePopupImage = this._popup.querySelector(".popup__image");
    this._imagePopupImage.src = this._link;
    this._imagePopupImage.alt = this._title;
    this._popup.querySelector(".popup__caption").textContent = this._title;
  }
}

export default PopupWithImage;
