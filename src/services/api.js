import axios from 'axios';

const api = axios.create({
  baseURL: 'https://financialmodelingprep.com/api/v3/quote/',
});

export default api;
