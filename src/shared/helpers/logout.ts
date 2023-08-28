import { AUTH_TOKEN, AUTH_TOKEN_EXP, USER } from "../constants/localstorage";

const logoutLocale = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(AUTH_TOKEN_EXP);
  localStorage.removeItem(USER);
}

export default logoutLocale;