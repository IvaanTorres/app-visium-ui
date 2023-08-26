import { AllFields } from "../../../../components/organisms/MyForm/shared/types/types"
import { REGEX } from "../../../../shared/constants/texts/regex"

const loginFormFields: AllFields[] = [
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

export default loginFormFields