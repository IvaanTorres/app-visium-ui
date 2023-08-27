import { AUTH_TOKEN, AUTH_TOKEN_EXP } from "../constants/localstorage";

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(AUTH_TOKEN_EXP);
}

export default logout;