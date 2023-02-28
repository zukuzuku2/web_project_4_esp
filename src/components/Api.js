export default class Api {
  constructor(option = {}) {
    this._option = option;
    this._header = new Headers();
    this._header.append("Authorization", this._option.token);
    this._header.append("Content-Type", "application/json");
  }

  fetchData(url, requestOptions) {
    return fetch(`${this._option.url}/${url}`, requestOptions).then(
      (response) => {
        return response.json(this._option.url, url);
      }
    );
  }

  getCards() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };

    return this.fetchData("cards", requestOptions);
  }

  deleteCards(id) {
    const requestOptions = {
      method: "DELETE",
      headers: this._header,
    };
    return this.fetchData(`/cards/${id}`, requestOptions);
  }

  addCard(options) {
    const requestOptions = {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        name: options.name,
        link: options.link,
      }),
    };
    return this.fetchData("cards", requestOptions);
  }

  like() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };
    return this.fetchData("cards", requestOptions);
  }

  updateLike(cardId) {
    const requestOptions = {
      method: "PUT",
      headers: this._header,
    };
    return this.fetchData(`cards/likes/${cardId}`, requestOptions);
  }

  removeLike(cardId) {
    const requestOptions = {
      method: "DELETE",
      headers: this._header,
    };
    return this.fetchData(`cards/likes/${cardId}`, requestOptions);
  }

  getUserInfo() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };
    return this.fetchData(`users/me`, requestOptions);
  }

  updateUserInfo(options) {
    const requestOptions = {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        name: options.name,
        about: options.about,
        avatar: options.avatar,
      }),
    };
    return this.fetchData(`users/me`, requestOptions);
  }

  updateProfilePhoto(options) {
    const requestOptions = {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        avatar: options.avatar,
      }),
    };
    return this.fetchData(`users/me/avatar`, requestOptions);
  }
}
