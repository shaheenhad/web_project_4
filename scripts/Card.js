import { openPopup } from "./utils.js";
import { imagePopup, imagePopupImage } from "./index.js";

class Card {
  constructor(data, templateSelector) {
    this._title = data.title;
    this._link = data.link;

    this._template = templateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like_clicked");
  }

  _handleTrashButton() {
    this._trashButton.closest(".card").remove();
  }

  _handleImagePreview() {
    openPopup(imagePopup);
    imagePopupImage.src = this._link;
    imagePopupImage.alt = this._title;
    imagePopup.querySelector(".popup__caption").textContent = this._title;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._trashButton.addEventListener("click", () => {
      this._handleTrashButton();
    });

    this._imageEl.addEventListener("click", () => {
      this._handleImagePreview();
    });
  }

  getView() {
    this._cardEl = this._getTemplate();

    this._likeButton = this._cardEl.querySelector(".card__like");
    this._trashButton = this._cardEl.querySelector(".card__trash");
    this._imageEl = this._cardEl.querySelector(".card__image");

    this._cardEl.querySelector(".card__title").textContent = this._title;
    this._imageEl.style.backgroundImage = `url(${this._link})`;

    this._setEventListeners();

    return this._cardEl;
  }
}

export default Card;
