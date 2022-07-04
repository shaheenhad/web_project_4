import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */
const page = document.querySelector(".page");
const editPopup = page.querySelector(".popup_type_edit");
const addPopup = page.querySelector(".popup_type_add");
const popupProfileForm = page.querySelector("#popup-profile");
const popupAddForm = page.querySelector("#popup-add-card");
const elements = page.querySelector(".elements");
const imagePopup = page.querySelector(".popup_type_image");
const imagePopupImage = imagePopup.querySelector(".popup__image");
/* -------------------------------------------------------------------------- */
/*                                   Buttons                                  */
/* -------------------------------------------------------------------------- */
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const closeButtonEdit = page.querySelector(".popup__close_edit");
const closeButtonAdd = page.querySelector(".popup__close_add");
const closeButtonImage = page.querySelector(".popup__close_image");
/* -------------------------------------------------------------------------- */
/*                                   Inputs                                   */
/* -------------------------------------------------------------------------- */
const profileName = page.querySelector(".profile__name");
const profileTitle = page.querySelector(".profile__description");
const popupName = page.querySelector(".popup__input_type_name");
const popupTitle = page.querySelector(".popup__input_type_title");
const addPopupImageTitle = page.querySelector(".popup__input_type_image-title");
const addPopupImageLink = page.querySelector(".popup__input_type_image");
/* -------------------------------------------------------------------------- */
/*                                  Templates                                 */
/* -------------------------------------------------------------------------- */
// const cardTemplate = page
//   .querySelector("#card-template")
//   .content.querySelector(".card");
const cardTemplateSelector = "#card-template";
/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// load initial cards

initialCards.forEach(function (card) {
  // const newCard = generateCard(card);
  // renderCard(newCard, elements);
  renderCard(card, elements);
});

function openPopup(popup) {
  popup.classList.add("popup_is-visible");
  page.addEventListener("keydown", handleClosePopupEsc);
  page.addEventListener("mousedown", handleClosePopupClick);
}

function handleClosePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = page.querySelector(".popup_is-visible");
    closePopup(openedPopup);
  }
}

function handleClosePopupClick(evt) {
  if (evt.target.matches(".popup")) {
    const openedPopup = page.querySelector(".popup_is-visible");
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_is-visible");
  page.removeEventListener("keydown", handleClosePopupEsc);
  page.removeEventListener("mousedown", handleClosePopupClick);
}

/* -------------------------- Edit popup features -------------------------- */

// make popup visible when edit button is clicked

function editProfile() {
  openPopup(editPopup);

  // keep profile info when popup is opened

  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
}

// save new input data when save button is used

function saveProfile(e) {
  e.preventDefault();

  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;

  closePopup(editPopup);
}

/* --------------------------- Add popup features -------------------------- */

function createButtonHandler(e) {
  e.preventDefault();

  // get input value for new card
  const cardTitle = addPopupImageTitle.value;
  const cardLink = addPopupImageLink.value;

  const newCardObject = {
    title: cardTitle,
    link: cardLink,
  };

  const newCard = generateCard(newCardObject);
  renderNewCard(newCard, elements);
  // remove input data upon submit
  popupAddForm.reset();
  closePopup(addPopup);
}

// function generateCard(card) {
//   const cardClone = cardTemplate.cloneNode(true);
//   cardClone.querySelector(".card__title").textContent = card.title;
//   const imageEl = cardClone.querySelector(".card__image");
//   imageEl.style.backgroundImage = `url(${card.link})`;
//   // add event listeners to be card specific
//   const likeButton = cardClone.querySelector(".card__like");
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like_clicked");
//   });

//   const trashButton = cardClone.querySelector(".card__trash");
//   trashButton.addEventListener("click", () => {
//     trashButton.closest(".card").remove();
//   });

//   imageEl.addEventListener("click", () => {
//     openPopup(imagePopup);
//     imagePopupImage.src = card.link;
//     imagePopupImage.alt = card.title;
//     imagePopup.querySelector(".popup__caption").textContent = card.title;
//   });
//   return cardClone;
// }

function renderCard(card, container) {
  const initCard = new Card(card, cardTemplateSelector);
  container.append(initCard.getView());
}
function renderNewCard(card, container) {
  container.prepend(card);
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

editButton.addEventListener("click", editProfile);
closeButtonEdit.addEventListener("click", () => closePopup(editPopup));
popupProfileForm.addEventListener("submit", saveProfile);
addButton.addEventListener("click", () => openPopup(addPopup));
closeButtonAdd.addEventListener("click", () => closePopup(addPopup));
popupAddForm.addEventListener("submit", createButtonHandler);
closeButtonImage.addEventListener("click", () => closePopup(imagePopup));

const editFormValidator = new FormValidator(settings, popupProfileForm);
const addFormValidator = new FormValidator(settings, popupAddForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
