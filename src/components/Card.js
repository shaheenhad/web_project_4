export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._template = templateSelector;
    this._likes = data.likes;
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
    this._cardEl.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._trashButton.addEventListener("click", () => {
      this._handleTrashButton();
    });

    this._imageEl.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  getView() {
    this._cardEl = this._getTemplate();

    this._likeButton = this._cardEl.querySelector(".card__like");
    this._trashButton = this._cardEl.querySelector(".card__trash");
    this._imageEl = this._cardEl.querySelector(".card__image");
    this._likesTotal = this._cardEl.querySelector(".card__like-num");

    this._cardEl.querySelector(".card__title").textContent = this._name;
    this._imageEl.style.backgroundImage = `url(${this._link})`;
    this._likesTotal.textContent = this._likes.length;

    this._setEventListeners();

    return this._cardEl;
  }
}
