class UserInfo {
  constructor({ userNameSelector, titleSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._title = document.querySelector(titleSelector);
  }

  getUserInfo() {
    const userObj = {
      name: this._userName.textContent,
      title: this._title.textContent,
    };
    return userObj;
  }

  setUserInfo({ name, title }) {
    this._userName.textContent = name;
    this._title.textContent = title;
  }
}

export default UserInfo;
