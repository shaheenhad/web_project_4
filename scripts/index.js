const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const editPopup = page.querySelector(".popup_edit-button");
const addPopup = page.querySelector(".popup_add-button");
const closeButtonEdit = page.querySelector(".popup__close_edit");
const closeButtonAdd = page.querySelector(".popup__close_add");
const profileName = page.querySelector(".profile__name");
const profileTitle = page.querySelector(".profile__description");
const popupName = page.querySelector(".popup__input_type_name");
const popupTitle = page.querySelector(".popup__input_type_title");
const popupForm = page.querySelector(".popup__form");

// make popup visible when edit button is clicked

function editProfile() {
  editPopup.classList.add("popup_is-visible");

  // keep profile info when popup is opened

  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
}

// close popup when close button is clicked

function closeEditPopup() {
  editPopup.classList.remove("popup_is-visible");
}

// save new input data when save button is used

function saveProfile(e) {
  e.preventDefault();

  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;

  closeEditPopup();
}

// add button and popup functionality
function addButtonHandler() {
  addPopup.classList.add("popup_is-visible");
}

function closeAddPopup() {
  addPopup.classList.remove("popup_is-visible");
}

editButton.addEventListener("click", editProfile);
closeButtonEdit.addEventListener("click", closeEditPopup);
popupForm.addEventListener("submit", saveProfile);
addButton.addEventListener("click", addButtonHandler);
closeButtonAdd.addEventListener("click", closeAddPopup);
