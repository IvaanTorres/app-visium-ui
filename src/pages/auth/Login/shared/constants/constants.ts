import { MySelectConfig } from "../../../../../components/molecules/form/MySelect/shared/types/types"
import { AllFields, MyFormConfig, MyFormState } from "../../../../../components/organisms/MyForm/shared/types/types"
import { REGEX } from "../../../../../shared/constants/texts/regex"
import { localeSelectStyle } from "../../styles/styles"
import FRANCE_FLAG from "../../../../../assets/flags/fr_FR.png"
import GERMANY_FLAG from "../../../../../assets/flags/de_DE.png"
import ENGLAND_FLAG from "../../../../../assets/flags/en_EN.png"

export const langSelectConfig: MySelectConfig = {
  type: "select",
  stateName: "locale",
  options: [
    {
      label: FRANCE_FLAG,
      id: "fr_FR",
      isDefault: true,
    },
    {
      label: GERMANY_FLAG,
      id: "de_DE",
    },
    {
      label: ENGLAND_FLAG,
      id: "en_DE",
    },
  ],
  custom: {
    classList: localeSelectStyle,
  }
}

const initialFormState: MyFormState['get'] = {
  values: {
    usernameEmail: '',
    password: ''
  },
  errors: [],
}

const formFields: AllFields[] = [
  {
    type: "text",
    label: "Email or username",
    helper: "Use your email (ex: john@example.com) or username (ex: john.boston_02)",
    stateName: "usernameEmail",
    custom: {
      isRequired: true,
      pattern: [REGEX.EMAIL, REGEX.USERNAME],
    }
  },
  {
    type: "hidden",
    label: "Password",
    helper: "Use your password (Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character)",
    stateName: "password",
    custom: {
      isRequired: true,
      pattern: [REGEX.PASSWORD],
    }
  }
]

const formConfig: MyFormConfig = {
  fields: formFields,
  actions: {
    primary: {
      children: 'Let\'s go !',
      onClick: () => {
        console.log('Login')
      },
      type: 'info',
      importance: 'primary',
      isSubmit: true,
    },
    secondary: {
      children: 'Go to register',
      onClick: () => {
        console.log('Go to register')
      },
      type: 'info',
      importance: 'secondary',
    },
  }
}

export const loginForm = {
  config: formConfig,
  initialState: initialFormState
}
