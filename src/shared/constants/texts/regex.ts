export const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
  USERNAME: /^[a-zA-Z0-9_.]{3,20}$/,
  NUMBER: /^[0-9]*$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
}