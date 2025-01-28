import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': process.env.REACT_APP_X_API_KEY,
  },
});
