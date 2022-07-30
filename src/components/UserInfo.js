class UserInfo {
  constructor({ userNameSelector, titleSelector, profilePicSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._title = document.querySelector(titleSelector);
    this._profilePic = document.querySelector(profilePicSelector);
  }

  getUserInfo() {
    const userObj = {
      name: this._userName.textContent,
      title: this._title.textContent,
    };
    return userObj;
  }

  setUserInfo({ name, title, avatar }) {
    this._userName.textContent = name;
    this._title.textContent = title;
    this._profilePic.src = avatar;
  }
}

export default UserInfo;
