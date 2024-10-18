import axios from "axios";
import 'dotenv/config'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can also add interceptors for requests or responses
instance.interceptors.request.use(
  (config) => {
    // Modify request before sending (e.g., add token to headers)
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default instance;