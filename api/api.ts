import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pzender.eu.pythonanywhere.com',
  headers: {},
})

export default api
