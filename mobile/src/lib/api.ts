import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.137.53:3333',
})
