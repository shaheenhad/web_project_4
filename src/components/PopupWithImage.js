import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupImage = this._popup.querySelector(".popup__image");
    this._imagePopupCaption = this._popup.querySelector(".popup__caption");
    this.open = this.open.bind(this);
  }

  open({ link, name }) {
    super.open();
    this._imagePopupImage.src = link;
    this._imagePopupImage.alt = name;
    this._imagePopupCaption.textContent = name;
  }
}

export default PopupWithImage;
