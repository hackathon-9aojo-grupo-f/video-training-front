import axios from 'axios';
import tokenInterceptor from './token.interceptor';

const ApiConn = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

ApiConn.interceptors.request.use(tokenInterceptor);

export default ApiConn;
