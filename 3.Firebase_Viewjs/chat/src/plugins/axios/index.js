import axios from 'axios';
import initInterceptors from './interceptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

initInterceptors(instance);

export default instance;
