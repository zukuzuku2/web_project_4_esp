export class Api {
  constructor(option) {
    this._option = option;
  }

  getCards() {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    let requestOptions = {
      method: "GET",
      headers: header,
      //   redirect: "follow",
    };

    return fetch(`${this._option.url}/cards`, requestOptions).then((response) =>
      response.json()
    );
  }

  deleteCards(id) {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    header.append("Content-Type", "application/json");
    let requestOptions = {
      method: "DELETE",
      headers: header,
    };
    return fetch(`${this._option.url}/cards/${id}`, requestOptions).then(
      (response) => {
        response.json();
      }
    );
  }

  addCard(options) {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    header.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        name: options.name,
        link: options.link,
      }),
    };
    fetch(`${this._option.url}/cards`, requestOptions).then((response) =>
      response.json()
    );
  }

  like() {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    let requestOptions = {
      method: "GET",
      headers: header,
    };
    return fetch(`${this._option.url}/cards`, requestOptions).then((response) =>
      response.json()
    );
  }

  updateLike(cardId) {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    let requestOptions = {
      method: "PUT",
      headers: header,
    };
    return fetch(
      `${this._option.url}/cards/likes/${cardId}`,
      requestOptions
    ).then((response) => response.json());
  }

  removeLike(cardId) {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    let requestOptions = {
      method: "DELETE",
      headers: header,
    };
    return fetch(
      `${this._option.url}/cards/likes/${cardId}`,
      requestOptions
    ).then((response) => response.json());
  }

  getUserInfo() {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    let requestOptions = {
      method: "GET",
      headers: header,
    };
    return fetch(`${this._option.url}/users/me`, requestOptions).then(
      (response) => response.json()
    );
  }

  updateUserInfo(options) {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    header.append("Content-Type", "application/json");
    let requestOptions = {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({
        name: options.name,
        about: options.about,
        avatar: options.avatar,
      }),
    };
    fetch(`${this._option.url}/users/me`, requestOptions).then((response) =>
      response.json()
    );
  }

  updateProfilePhoto(options) {
    let header = new Headers();
    header.append("Authorization", this._option.token);
    header.append("Content-Type", "application/json");
    let requestOptions = {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({
        avatar: options.avatar,
      }),
    };
    return fetch(`${this._option.url}/users/me/avatar`, requestOptions)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }
}
