import axios from 'axios';

const api = axios.create({
  // baseURL: `${process.env.VUE_APP_BACKEND_URL}`
  // baseURL: `http://localhost:3000`
  baseURL: 'api'
});

const GeneralApi = {
  get_message() {
    return api.get(`/message`)
  },
}

export { api, GeneralApi }