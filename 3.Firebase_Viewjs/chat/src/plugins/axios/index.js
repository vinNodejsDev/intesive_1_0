import axios from 'axios';
import initInterceptors from './interceptors';

const instance = axios.create({
  baseURL: ProcessingInstruction.env.VUE_APP_URL,
});

initInterceptors(instance);
export default instance;
