import { profile__name, profile__skills } from "../utils/constants.js";
export class UserInfo {
  constructor(name, skills) {
    this._name = name;
    this._skills = skills;
  }

  getUserInfo() {
    return { name: this._name.textContent, job: this._skills.textContent };
  }

  setUserInfo(newName, newSkills) {
    this._name.textContent = newName;
    this._skills.textContent = newSkills;
  }
}

export const userInfo = new UserInfo(profile__name, profile__skills);
