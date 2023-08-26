import React from "react"
import { MyFieldError } from "../../../../../../shared/types/texts/forms/forms"

export type TextInputTypes = 'text' | 'hidden' | 'number'
export type MyTextInputConfig = {
  type: TextInputTypes,
  label?: string,
  helper?: string,
  placeholder?: string,
  stateName: string,
  custom?: {
    isDisabled?: boolean,
    isRequired?: boolean,
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    pattern?: RegExp[],
    classList?: string
  }
}

export type MyTextInputState = string | number

export type MyTextInputProps = {
  config: MyTextInputConfig
  state: {
    get: MyTextInputState
    set: (value: MyTextInputState, error: MyFieldError) => void
  }
}

export type MytextInputStyle = {
  isDisabled: boolean,
  hasError: boolean
}