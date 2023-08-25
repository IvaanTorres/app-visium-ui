import { dangerPrimary, dangerSecondary, dangerTertiary, infoPrimary, infoSecondary, infoTertiary, successPrimary, successSecondary, successTertiary, warningPrimary, warningSecondary, warningTertiary } from "../../styles/styles"

const buttons = ({
  isDisabled,
}: {
  isDisabled?: boolean
}) => ({
  info: {
    primary: infoPrimary(isDisabled),
    secondary: infoSecondary(isDisabled),
    tertiary: infoTertiary(isDisabled),
  },
  success: {
    primary: successPrimary(isDisabled),
    secondary: successSecondary(isDisabled),
    tertiary: successTertiary(isDisabled),
  },
  warning: {
    primary: warningPrimary(isDisabled),
    secondary: warningSecondary(isDisabled),
    tertiary: warningTertiary(isDisabled),
  },
  danger: {
    primary: dangerPrimary(isDisabled),
    secondary: dangerSecondary(isDisabled),
    tertiary: dangerTertiary(isDisabled),
  },
})

export default buttons