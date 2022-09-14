import config from './config'

class Api {
  constructor(configData) {
    this._baseUrl = configData.apiData.baseUrl
    this._headers = configData.apiData.headers
  }

  _getResponseData = (res, message) => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`ошибка ${res.status} при ${message}`)
    }
  }

  search(searchData, page = 1, type = '') {
    return !type.length
      ? fetch(`${this._baseUrl}&s=${searchData}&page=${page}`).then((res) =>
          this._getResponseData(res, 'загрузке данных с сервера')
        )
      : fetch(
          `${this._baseUrl}&type=${type}&s=${searchData}&page=${page}`
        ).then((res) => this._getResponseData(res, 'загрузке данных с сервера'))
  }
}
const api = new Api(config)

export default api
