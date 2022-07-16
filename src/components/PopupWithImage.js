import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.open = this.open.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open({ link, title }) {
    super.open();
    this._imagePopupImage = this._popup.querySelector(".popup__image");
    this._imagePopupImage.src = link;
    this._imagePopupImage.alt = title;
    this._popup.querySelector(".popup__caption").textContent = title;
  }
}

export default PopupWithImage;
