import axios from 'axios';
import { User } from '../types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface LoginResponse {
  user: User;
  token: string;
}

export const authApi = {
  login: (credentials: { email: string; password: string }) => 
    api.post<LoginResponse>('/auth/login', credentials),
  register: (userData: { 
    name: string; 
    email: string; 
    password: string; 
    role: 'client' | 'provider' 
  }) => api.post<LoginResponse>('/auth/register', userData),
  forgotPassword: (email: string) => 
    api.post('/auth/forgot-password', { email }),
  resetPassword: (data: { token: string; password: string }) => 
    api.post('/auth/reset-password', data),
};