import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

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
// const editPopup = page.querySelector(".popup_type_edit");
// const addPopup = page.querySelector(".popup_type_add");
const popupProfileForm = page.querySelector("#popup-profile");
const popupAddForm = page.querySelector("#popup-add-card");
const elements = page.querySelector(".elements");
// const imagePopup = page.querySelector(".popup_type_image");
// const imagePopupImage = imagePopup.querySelector(".popup__image");
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

const cardTemplateSelector = "#card-template";
/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------- Edit popup features -------------------------- */

// make popup visible when edit button is clicked

function editProfile() {
  openPopup(editPopup);

  // keep profile info when popup is opened

  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
}

// save new input data when save button is used

// function saveProfile(e) {
//   e.preventDefault();

//   profileName.textContent = popupName.value;
//   profileTitle.textContent = popupTitle.value;

//   closePopup(editPopup);
// }

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

// editButton.addEventListener("click", editProfile);
// closeButtonEdit.addEventListener("click", () => closePopup(editPopup));
// popupProfileForm.addEventListener("submit", saveProfile);
// addButton.addEventListener("click", () => openPopup(addPopup));
// closeButtonAdd.addEventListener("click", () => closePopup(addPopup));
// popupAddForm.addEventListener("submit", createButtonHandler);
// closeButtonImage.addEventListener("click", () => closePopup(imagePopup));

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item, cardTemplateSelector, () => {
        imagePopup.setEventListeners();
        imagePopup.open(item);
      });
      cardList.addItem(newCard.getView());
    },
  },
  ".elements"
);
cardList.renderItems();

const userInfo = new UserInfo({
  usernameSelector: ".profile__name",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage(".popup_type_image");

const editFormValidator = new FormValidator(settings, popupProfileForm);
const addFormValidator = new FormValidator(settings, popupAddForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editPopup = new PopupWithForm(".popup_type_edit", () => {
  editPopup.close();
});
editPopup.setEventListeners();
editButton.addEventListener("click", editPopup.open);

const addPopup = new PopupWithForm(".popup_type_add", (data) => {
  const newCard = new Card(data, cardTemplateSelector, () => {
    imagePopup.setEventListeners();
    imagePopup.open(data);
  });
  cardList.addItem(newCard.getView());
  addPopup.close();
});
addPopup.setEventListeners();
addButton.addEventListener("click", addPopup.open);
