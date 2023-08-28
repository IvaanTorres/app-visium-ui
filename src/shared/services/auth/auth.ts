// Create the services using axios

import { DELETE_ACCOUNT, LOGIN, LOGOUT, REFRESH_TOKEN, REGISTER } from '../../constants/resources';
import { APIResponse } from '../../types/api/responses';
import { LoginType } from '../../types/auth/login';
import Axios from '../Axios';

export const register = async (user: {
  email?: string,
  username?: string,
  password: string,
}, locale: string) => {
  const { data } = await Axios.post(REGISTER, {
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
    APIResponse<LoginType>
  >(LOGIN, {
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
  const { data } = await Axios.post(LOGOUT);
  return data;
}

export const deleteAccount = async () => {
  const { data } = await Axios.delete<APIResponse<{
    is_deleted: boolean,
  }>>(DELETE_ACCOUNT);
  return data;
}

export const refreshToken = async () => {
  const { data } = await Axios.post<APIResponse<
    Omit<LoginType, 'access_token'>
  >>(REFRESH_TOKEN);
  return data;
}