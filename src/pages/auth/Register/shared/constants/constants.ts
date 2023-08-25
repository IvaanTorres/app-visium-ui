import { AllFields, MyFormConfig, MyFormState } from "../../../../../components/organisms/MyForm/shared/types/types"

const initialFormState: MyFormState['get'] = {
  values: {
    email: '',
    locale: 'en'
  },
  errors: [],
}

const formFields: AllFields[] = [
  {
    type: "text",
    label: "Email",
    helper: "Use your email to register (john@example.com)",
    placeholder: "Email",
    stateName: "email",
    custom: {
      isDisabled: false,
      classList: '',
      pattern: /\S+@\S+\.\S+/,
      // suffix: <MyIcon icon={ICON_TRANSLATE} size={30} />,
    }
  },
  {
    type: "select",
    label: "Locale",
    helper: "Helper select text",
    stateName: "locale",
    options: [
      {
        label: "En",
        id: "en",
        isDefault: true,
      },
      {
        label: "Es",
        id: "es",
      },
      {
        label: "Fr",
        id: "fr",
      },
    ],
    custom: {
      classList: '',
      isDisabled: false,
      isRequired: true,
      hasDropdownIcon: false,
    }
  }
]

const formConfig: MyFormConfig = {
  fields: formFields,
  actions: {
    primary: {
      children: 'Register',
      onClick: () => {
        console.log('Register')
      },
      type: 'info',
      importance: 'primary',
      isSubmit: true,
    },
    secondary: {
      children: 'Go to login',
      onClick: () => {
        console.log('Go to login')
      },
      type: 'info',
      importance: 'secondary',
    },
  }
}

export const registerForm = {
  config: formConfig,
  initialState: initialFormState
}