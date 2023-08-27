import { TFunction } from "i18next"
import { AllFields } from "../../../../components/organisms/MyForm/shared/types/types"
import { REGEX } from "../../../../shared/constants/texts/regex"

const loginFormFields = (t: TFunction<"translation", undefined>): AllFields[] => [
  {
    type: "text",
    label: t('auth.general.labels.emailOrUsername'),
    helper: t('auth.general.helpers.emailOrUsername'),
    stateName: "usernameEmail",
    custom: {
      isRequired: true,
      pattern: [REGEX.EMAIL, REGEX.USERNAME],
    }
  },
  {
    type: "hidden",
    label: t('auth.general.labels.password'),
    helper: t('auth.general.helpers.password'),
    stateName: "password",
    custom: {
      isRequired: true,
      pattern: [REGEX.PASSWORD],
    }
  }
]

export default loginFormFields