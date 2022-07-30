export default class Card {
  constructor(data, templateSelector, handleCardClick, handleTrashButtonClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._template = templateSelector;
    this._likes = data.likes;
    this._handleTrashButtonClick = handleTrashButtonClick;
    this._ownerId = data.owner._id;
    this._userId = data.userId;
    this._id = data._id;
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

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._trashButton.addEventListener("click", () => {
      this._handleTrashButtonClick(this);
    });

    this._imageEl.addEventListener("click", () => {
      this._handleCardClick({ link: this._link, name: this._name });
    });
  }

  getCardId() {
    return this._id;
  }

  handleDelete() {
    this._cardEl.remove();
    this._cardEl = null;
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

    if (this._ownerId !== this._userId) {
      this._trashButton.remove();
    }

    this._setEventListeners();

    return this._cardEl;
  }
}
