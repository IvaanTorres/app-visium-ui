import { dangerPrimary, dangerSecondary, dangerTertiary, infoPrimary, infoSecondary, infoTertiary, successPrimary, successSecondary, successTertiary, warningPrimary, warningSecondary, warningTertiary } from "../../styles/styles"

const buttons = {
  info: {
    primary: infoPrimary,
    secondary: infoSecondary,
    tertiary: infoTertiary,
  },
  success: {
    primary: successPrimary,
    secondary: successSecondary,
    tertiary: successTertiary,
  },
  warning: {
    primary: warningPrimary,
    secondary: warningSecondary,
    tertiary: warningTertiary,
  },
  danger: {
    primary: dangerPrimary,
    secondary: dangerSecondary,
    tertiary: dangerTertiary,
  },
}

export default buttons