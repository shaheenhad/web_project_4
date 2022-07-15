// function openPopup(popup) {
//   popup.classList.add("popup_is-visible");
//   document.addEventListener("keydown", handleClosePopupEsc);
//   document.addEventListener("mousedown", handleClosePopupClick);
// }

// function handleClosePopupEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_is-visible");
//     closePopup(openedPopup);
//   }
// }

// function handleClosePopupClick(evt) {
//   if (evt.target.matches(".popup")) {
//     const openedPopup = document.querySelector(".popup_is-visible");
//     closePopup(openedPopup);
//   }
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_is-visible");
//   document.removeEventListener("keydown", handleClosePopupEsc);
//   document.removeEventListener("mousedown", handleClosePopupClick);
// }

// export { openPopup, handleClosePopupClick, handleClosePopupEsc, closePopup };
