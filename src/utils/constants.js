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
const popupProfilePicForm = page.querySelector("#popup-profile-pic");
const cardElementsSelector = ".elements";
const profilePicSelector = ".profile__image";
/* -------------------------------------------------------------------------- */
/*                                   Buttons                                  */
/* -------------------------------------------------------------------------- */
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const editProfilePicButton = page.querySelector(".profile__image-container");
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

export {
  settings,
  popupProfileForm,
  popupAddForm,
  popupProfilePicForm,
  cardElementsSelector,
  editButton,
  addButton,
  editProfilePicButton,
  profileNameSelector,
  profileTitleSelector,
  popupName,
  profilePicSelector,
  popupTitle,
  cardTemplateSelector,
};
