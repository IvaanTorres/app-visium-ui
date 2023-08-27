import { AUTH_TOKEN, AUTH_TOKEN_EXP, USER } from "../constants/localstorage";

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(AUTH_TOKEN_EXP);
  localStorage.removeItem(USER);
}

export default logout;