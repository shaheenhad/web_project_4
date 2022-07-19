import { initialCards, settings } from "../utils/constants.js";
import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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
const profileNameSelector = ".profile__name";
const profileTitleSelector = ".profile__description";
const popupName = page.querySelector(".popup__input_type_name");
const popupTitle = page.querySelector(".popup__input_type_title");
/* -------------------------------------------------------------------------- */
/*                                  Templates                                 */
/* -------------------------------------------------------------------------- */

const cardTemplateSelector = "#card-template";

const renderCard = (card) => {
  const newCard = new Card(card, cardTemplateSelector, () => {
    imagePopup.open(card);
  });
  cardList.addItem(newCard.getView());
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardElements
);
cardList.renderItems();

const userInfo = new UserInfo({
  userNameSelector: profileNameSelector,
  titleSelector: profileTitleSelector,
});

const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.setEventListeners();

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
  const { name, title } = userInfo.getUserInfo();
  popupName.value = name;
  popupTitle.value = title;
  editPopup.open();
});

const addPopup = new PopupWithForm(".popup_type_add", (data) => {
  renderCard(data);
  addPopup.close();
});
addPopup.setEventListeners();
addButton.addEventListener("click", addPopup.open);
