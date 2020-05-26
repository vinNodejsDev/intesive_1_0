import axios from 'axios';
import initInterceptors from './interseptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

initInterceptors(instance);

export default instance;
