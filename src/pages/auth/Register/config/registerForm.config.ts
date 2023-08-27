import { TFunction } from "i18next"
import { AllFields } from "../../../../components/organisms/MyForm/shared/types/types"
import { REGEX } from "../../../../shared/constants/texts/regex"

const registerFormFields = (t: TFunction<"translation", undefined>): AllFields[] => ([
  {
    type: "text",
    label: t('auth.general.labels.email'),
    helper: t('auth.general.helpers.email'),
    stateName: "email",
    custom: {
      isRequired: true,
      pattern: [REGEX.EMAIL],
    }
  },
  {
    type: "text",
    label: t('auth.general.labels.username'),
    helper: t('auth.general.helpers.username'),
    stateName: "username",
    custom: {
      isRequired: true,
      pattern: [REGEX.USERNAME],
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
  },
  {
    type: "hidden",
    label: t('auth.general.labels.repeatPassword'),
    helper: t('auth.general.helpers.password'),
    stateName: "repeatPassword",
    custom: {
      isRequired: true,
    }
  }
])

export default registerFormFields