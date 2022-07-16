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
const popupProfileForm = page.querySelector("#popup-profile");
const popupAddForm = page.querySelector("#popup-add-card");
const cardElements = ".elements";
/* -------------------------------------------------------------------------- */
/*                                   Buttons                                  */
/* -------------------------------------------------------------------------- */
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
/* -------------------------------------------------------------------------- */
/*                                   Inputs                                   */
/* -------------------------------------------------------------------------- */
const profileName = ".profile__name";
const profileTitle = ".profile__description";
const popupName = page.querySelector(".popup__input_type_name");
const popupTitle = page.querySelector(".popup__input_type_title");
/* -------------------------------------------------------------------------- */
/*                                  Templates                                 */
/* -------------------------------------------------------------------------- */

const cardTemplateSelector = "#card-template";

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
  cardElements
);
cardList.renderItems();

const userInfo = new UserInfo({
  usernameSelector: profileName,
  titleSelector: profileTitle,
});

const imagePopup = new PopupWithImage(".popup_type_image");

const editFormValidator = new FormValidator(settings, popupProfileForm);
const addFormValidator = new FormValidator(settings, popupAddForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editPopup = new PopupWithForm(".popup_type_edit", (data) => {
  userInfo.setUserInfo(data);
  editPopup.close();
});
editPopup.setEventListeners();
editButton.addEventListener("click", () => {
  popupName.value = userInfo.getUserInfo().name;
  popupTitle.value = userInfo.getUserInfo().title;
  editPopup.open();
});

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
