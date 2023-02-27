import {
  profile__name,
  profile__skills,
  profile__Image,
} from "../utils/constants.js";
export class UserInfo {
  constructor(name, skills, url = "", selector = "") {
    this._name = name;
    this._skills = skills;
    this._url = url;
    this._selector = selector;
  }

  render() {
    profile__name.textContent = this._name;
    profile__skills.textContent = this._skills;
    profile__Image.setAttribute("src", this._url);
  }

  getUserInfo() {
    return { name: this._name.textContent, job: this._skills.textContent };
  }

  setUserInfo(newName, newSkills) {
    profile__name.textContent = newName;
    profile__skills.textContent = newSkills;
  }
}

//export const userInfo = new UserInfo(profile__name, profile__skills);
