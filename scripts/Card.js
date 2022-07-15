import PopupWithImage from "./PopupWithImage.js";

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
    const imgPrev = new PopupWithImage(
      ".popup_type_image",
      this._title,
      this._link
    );
    imgPrev.setEventListeners();
    imgPrev.open();
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
