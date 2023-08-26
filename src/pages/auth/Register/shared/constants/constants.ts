import { AllFields, MyFormConfig, MyFormState } from "../../../../../components/organisms/MyForm/shared/types/types"
import { REGEX } from "../../../../../shared/constants/texts/regex"

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
    label: "Email",
    helper: "Use your email (ex: john@example.com)",
    stateName: "email",
    custom: {
      isRequired: true,
      pattern: [REGEX.EMAIL],
    }
  },
  {
    type: "text",
    label: "Username",
    helper: "Use your username (ex: jhon.doe_23)",
    stateName: "username",
    custom: {
      isRequired: true,
      pattern: [REGEX.USERNAME],
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
  },
  {
    type: "hidden",
    label: "Repeat password",
    helper: "Repeat your password to confirm it",
    stateName: "repeatPassword",
    custom: {
      isRequired: true,
    }
  }
]

const formConfig: MyFormConfig = {
  fields: formFields,
  actions: {
    primary: {
      children: 'Let\'s go !',
      onClick: () => {
        console.log('Register')
      },
      type: 'info',
      importance: 'primary',
      isSubmit: true,
      disabled: false,
    },
    secondary: {
      children: 'Go to login',
      onClick: () => {
        console.log('Go to login')
      },
      type: 'info',
      importance: 'secondary',
      disabled: false,
    },
  }
}

export const registerForm = {
  config: formConfig,
  initialState: initialFormState
}
