// axios.ts
import axios from 'axios';
// import { useAuthStore } from './authStore';

// const authStore: any = useAuthStore();
// const baseUrl = import.meta.env.VITE_API_ENDPOINT;
const baseUrl = 'https://tmd-e-service-staging.up.railway.app/'

const instance = axios.create({
  baseURL: baseUrl,
});

// Add an interceptor to set the access token in the header
instance.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem("access_token")?? null;
     if(accessToken) {
      const token = JSON.parse(accessToken);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
     }
  
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
