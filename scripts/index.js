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

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */
const page = document.querySelector(".page");
const editPopup = page.querySelector(".popup_type_edit");
const addPopup = page.querySelector(".popup_type_add");
const popupProfileForm = page.querySelector("#popup-profile");
const popupAddForm = page.querySelector("#popup-add-card");
const elements = page.querySelector(".elements");

/* -------------------------------------------------------------------------- */
/*                                   Buttons                                  */
/* -------------------------------------------------------------------------- */
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const closeButtonEdit = page.querySelector(".popup__close_edit");
const closeButtonAdd = page.querySelector(".popup__close_add");

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
const cardTemplate = page
  .querySelector("#card-template")
  .content.querySelector(".card");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// load initial cards

initialCards.forEach(function (card) {
  const newCard = generateCard(card);
  renderCard(newCard, elements);
});

/* -------------------------- Edit popup features -------------------------- */

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

/* --------------------------- Add popup features -------------------------- */
function addButtonHandler() {
  addPopup.classList.add("popup_is-visible");
}

function closeAddPopup() {
  addPopup.classList.remove("popup_is-visible");
}

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
  console.log(newCardObject);
  renderNewCard(newCard, elements);
  addPopupImageTitle.value = "";
  addPopupImageLink.value = "";
  closeAddPopup();
}

function generateCard(card) {
  const cardClone = cardTemplate.cloneNode(true);
  cardClone.querySelector(".card__title").textContent = card.title;
  const imageEl = cardClone.querySelector(".card__image");
  imageEl.style.backgroundImage = `url(${card.link})`;
  return cardClone;
}

function renderCard(card, container) {
  container.append(card);
}
function renderNewCard(card, container) {
  container.prepend(card);
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

editButton.addEventListener("click", editProfile);
closeButtonEdit.addEventListener("click", closeEditPopup);
popupProfileForm.addEventListener("submit", saveProfile);
addButton.addEventListener("click", addButtonHandler);
closeButtonAdd.addEventListener("click", closeAddPopup);
popupAddForm.addEventListener("submit", createButtonHandler);
