const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const popup = page.querySelector(".popup");
const closeButton = page.querySelector(".popup__close");
const profileName = page.querySelector(".profile__name");
const profileTitle = page.querySelector(".profile__description");
const popupName = page.querySelector(".popup__input_name");
const popupTitle = page.querySelector(".popup__input_title");
const popupForm = page.querySelector(".popup__form");

// make popup visible when edit button is clicked

function editProfile() {
  popup.classList.add("popup_is-visible");

  // keep profile info when popup is opened

  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
}

// close popup when close button is clicked

function closePopup() {
  popup.classList.remove("popup_is-visible");
}

// save new input data when save button is used

function saveProfile(e) {
  e.preventDefault();

  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;

  closePopup();
}

editButton.addEventListener("click", editProfile);
closeButton.addEventListener("click", closePopup);
popupForm.addEventListener("submit", saveProfile);
