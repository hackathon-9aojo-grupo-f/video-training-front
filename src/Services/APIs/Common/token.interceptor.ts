import { InternalAxiosRequestConfig } from 'axios';

const tokenInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export default tokenInterceptor;
