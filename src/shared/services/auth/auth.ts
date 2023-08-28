// Create the services using axios

import { APIResponse } from '../../types/api/responses';
import { LoginType } from '../../types/auth/login';
import Axios from '../Axios';

export const register = async (user: {
  email?: string,
  username?: string,
  password: string,
}, locale: string) => {
  const { data } = await Axios.post('/register', {
    email: user.email,
    password: user.password,
    username: user.username,
    locale: locale,
  });
  return data;
}

export const login = async (user: {
  email?: string,
  username?: string,
  password: string,
}, locale: string) => {
  const { data } = await Axios.post<
    APIResponse<
      Omit<LoginType, 'id'>
    >
  >('/login', {
    ...(user.email 
      ? { email: user.email }
      : { username: user.username }
    ),
    password: user.password,
    locale: locale,
  });

  return data;
}

export const logout = async () => {
  const { data } = await Axios.post('/logout');
  return data;
}