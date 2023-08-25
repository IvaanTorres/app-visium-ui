import { MyFieldError } from "../../../../../../shared/types/texts/forms/forms"

export type MySelectConfig = {
  type: 'select',
  label?: string,
  helper?: string,
  stateName: string,
  options: MySelectOption[],
  custom?: {
    isDisabled?: boolean,
    isRequired?: boolean,
    hasDropdownIcon?: boolean,
    classList?: string
  }
}

export type MySelectOption = {
  id: string,
  label: string
}

export type MySelectState = MySelectOption

export type MySelectProps = {
  config: MySelectConfig
  state: {
    get: MySelectState | null
    set: (value: MySelectState, error: MyFieldError) => void
  }
}