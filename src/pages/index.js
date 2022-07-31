import {
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
  popupTitle,
  cardTemplateSelector,
  profilePicSelector,
} from "../utils/constants.js";
import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api";
import PopupWithDeleteConfirm from "../components/PopupWithDeleteConfirm.js";

const renderCard = (card) => {
  const newCard = new Card(
    card,
    cardTemplateSelector,
    handleCardClick,
    handleTrashButtonClick,
    toggleLike
  );
  cardList.addItem(newCard.getView());
};

function handleCardClick(card) {
  imagePopup.open(card);
}

function handleTrashButtonClick(card) {
  deletePopup.open(card);
}

let cardList;
let userId;
api
  .initialize()
  .then((res) => {
    const [user, data] = res;

    cardList = new Section(
      {
        items: data,
        renderer: (item) => {
          userId = user._id;
          renderCard({
            name: item.name,
            link: item.link,
            likes: item.likes,
            owner: item.owner,
            _id: item._id,
            userId,
          });
        },
      },
      cardElementsSelector
    );
    cardList.renderItems();
    userInfo.setUserInfo({
      name: user.name,
      title: user.about,
      avatar: user.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });

const userInfo = new UserInfo({
  userNameSelector: profileNameSelector,
  titleSelector: profileTitleSelector,
  profilePicSelector: profilePicSelector,
});

const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.setEventListeners();

// intialize form validation
const editFormValidator = new FormValidator(settings, popupProfileForm);
const addFormValidator = new FormValidator(settings, popupAddForm);
const profilePicFormValidator = new FormValidator(
  settings,
  popupProfilePicForm
);
profilePicFormValidator.enableValidation();
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editPopup = new PopupWithForm(".popup_type_edit", handleProfileSubmit);
editPopup.setEventListeners();
editButton.addEventListener("click", () => {
  handleProfileOpen();
});

const addPopup = new PopupWithForm(".popup_type_add", handleNewCardSubmit);
addPopup.setEventListeners();
addButton.addEventListener("click", addPopup.open);

const deletePopup = new PopupWithDeleteConfirm(
  ".popup_type_delete",
  handleConfirmDelete
);
deletePopup.setEventListeners();

const profilePicPopup = new PopupWithForm(
  ".popup_type_edit-profile-pic",
  handleProfilePicSubmit
);
profilePicPopup.setEventListeners();
editProfilePicButton.addEventListener("click", () => {
  profilePicPopup.open();
});

function handleProfileSubmit(data) {
  editPopup.renderSaving(true);
  api
    .setUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        title: data.about,
        avatar: data.avatar,
      });
      editPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editPopup.renderSaving(false, "edit");
    });
}

function handleProfileOpen() {
  const { name, title } = userInfo.getUserInfo();
  popupName.value = name;
  popupTitle.value = title;
  editPopup.open();
}

function handleNewCardSubmit(data) {
  addPopup.renderSaving(true);
  api
    .addCard(data)
    .then((res) => {
      renderCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        owner: res.owner,
        _id: res._id,
        userId,
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addPopup.renderSaving(false, "add");
      addPopup.close();
    });
}

function handleConfirmDelete(card) {
  deletePopup.renderSaving(true);
  api
    .deleteCard(card.getCardId())
    .then(() => {
      card.handleDelete();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      deletePopup.renderSaving(false, "delete");
      deletePopup.close();
    });
}

function handleProfilePicSubmit(data) {
  profilePicPopup.renderSaving(true);
  api
    .updateProfilePic(data)
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        title: data.about,
        avatar: data.avatar,
      });
      profilePicPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profilePicPopup.renderSaving(false, "edit");
    });
}

function toggleLike(card) {
  api
    .toggleLike(card._id, card.isLiked())
    .then((likes) => {
      card.updateLikes(likes.likes);
    })
    .catch((err) => {
      console.log(err);
    });
}
