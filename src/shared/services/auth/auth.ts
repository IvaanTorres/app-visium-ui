// Create the services using axios

import { User } from '../../types/auth/user';
import Axios from '../Axios';

export const register = async (user: User) => {
  const { data } = await Axios.post('/register', {
    email: user.email,
    password: user.password,
    username: user.username,
  });
  return data;
}

export const login = async (user: User) => {
  const { data } = await Axios.post('/login', {
    ...(user.email 
      ? { email: user.email }
      : { username: user.username }
    ),
    password: user.password,
  });
  return data;
}

export const logout = async () => {
  const { data } = await Axios.post('/logout');
  return data;
}