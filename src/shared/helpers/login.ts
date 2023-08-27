import { AUTH_TOKEN, AUTH_TOKEN_EXP } from "../constants/localstorage";

const login = (token: string, exp: number) => {
  localStorage.setItem(AUTH_TOKEN, token);
  localStorage.setItem(AUTH_TOKEN_EXP, JSON.stringify(exp));
}

export default login;