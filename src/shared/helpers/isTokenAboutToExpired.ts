import { AUTH_TOKEN_EXP } from "../constants/localstorage";

export const isTokenAboutToExpired = () => {
  const timestampExpiration = localStorage.getItem(AUTH_TOKEN_EXP);
  if (!timestampExpiration) return false;
  const expirationTime = (+timestampExpiration) * 1000;
  
  // Check if token has 5 min of life
  const isExpired = Date.now() > expirationTime - (5 * 60 * 1000);

  return !isExpired;
}