class UserInfo {
  constructor({ usernameSelector, jobSelector }) {
    this._username = document.querySelector(usernameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userObj = {
      username: this._username.textContent,
      job: this._job.textContent,
    };
    return userObj;
  }

  setUserInfo() {}
}

export default UserInfo;
