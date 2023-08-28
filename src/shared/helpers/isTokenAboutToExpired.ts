import { AUTH_TOKEN_EXP } from "../constants/localstorage";

export const isTokenAboutToExpired = () => {
  const timestampExpiration = localStorage.getItem(AUTH_TOKEN_EXP);
  if (!timestampExpiration) return false;
  
  // Check if the token has 5 min of life
  const isExpired = Date.now() > parseInt(timestampExpiration) - 300000;

  return !isExpired;
}