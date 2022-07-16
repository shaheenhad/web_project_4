class UserInfo {
  constructor({ usernameSelector, titleSelector }) {
    this._username = document.querySelector(usernameSelector);
    this._title = document.querySelector(titleSelector);
  }

  getUserInfo() {
    const userObj = {
      name: this._username.textContent,
      title: this._title.textContent,
    };
    return userObj;
  }

  setUserInfo({ name, title }) {
    this._username.textContent = name;
    this._title.textContent = title;
  }
}

export default UserInfo;
