import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return error.response;
  }
);
