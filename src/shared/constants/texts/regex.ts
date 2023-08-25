export const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  USERNAME: /^[a-zA-Z0-9_.]{3,20}$/,
}