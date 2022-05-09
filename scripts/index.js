let page = document.querySelector(".page");
let editButton = page.querySelector(".profile__edit-button");
let popup = page.querySelector(".popup");
let closeButton = page.querySelector(".popup__close");
let profileName = page.querySelector(".profile__name");
let profileTitle = page.querySelector(".profile__description");
let popupName = page.querySelector(".popup__input_name");
let popupTitle = page.querySelector(".popup__input_title");

// keep profile info when popup is opened

popupName.value = profileName.textContent;
popupTitle.value = profileTitle.textContent;

// make popup visible when edit button is clicked

function editProfile() {
  popup.classList.add("popup_is-visible");
}
editButton.addEventListener("click", editProfile);

// close popup when close button is clicked
function closePopup() {
  popup.classList.remove("popup_is-visible");
}
closeButton.addEventListener("click", closePopup);
