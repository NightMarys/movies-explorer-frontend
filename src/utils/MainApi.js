class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Метод проверки успешности запроса
  _getResponseData(res) {
    return res.ok
      ? res.json()
      : res.json().then((res) => Promise.reject(`${res.message}`));
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  // Редактирование профиля
  patchUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      credentials: "include",
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      credentials: "include",
      body: JSON.stringify({
        movieId: data.id,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${"https://api.nomoreparties.co" + data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `${
          "https://api.nomoreparties.co" + data.image.formats.thumbnail.url
        }`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => res.json());
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: "https://api.thatsmovies.nomoredomainsrocks.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
