import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export default class Person {

  static fetchAll = () => {
    return axios.get(baseUrl).then(({ data }) => data)
  }

  static add = newObj => {
    return axios.post(baseUrl, newObj).then(({ data }) => data)
  }

  static remove = id => {
    return axios.delete(`${baseUrl}/${id}`).then(({ data }) => data)
  }

  static update = (id, newObj) => {
    return axios
      .put(`${baseUrl}/${id}`, newObj)
      .then(({ data }) => data)
  }
}