import { MyFieldError } from "../../../../../shared/types/texts/forms/forms";
import { MyButtonProps } from "../../../../atoms/MyButton/shared/types/types";
import { MyTextInputConfig } from "../../../../molecules/form/MyInput/shared/types/types";
import { MySelectConfig } from "../../../../molecules/form/MySelect/shared/types/types";

/* --------------------------------- Config --------------------------------- */

// All form fields
export type AllFields = MyTextInputConfig | MySelectConfig

export type MyFormConfig = {
  fields: AllFields[],
  actions: {
    [key: string]: MyButtonProps
  }
}

/* ---------------------------------- State --------------------------------- */

export type MyFormState = {
  get: {
    values: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any
    },
    errors: MyFieldError[],
  }
  set: (value: MyFormState['get']) => void
}

/* ---------------------------------- Props --------------------------------- */
export type MyFormProps = {
  config: MyFormConfig
  state: MyFormState
  custom?: {
    classList?: string
  }
}