import axios from 'axios';

const base = typeof window === 'undefined'
  ? process.env.API_URL_SERVER // dominio para SSR
  : process.env.NEXT_PUBLIC_BASE_URL; // dominio para cliente


const api = axios.create({
  baseURL: base,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;