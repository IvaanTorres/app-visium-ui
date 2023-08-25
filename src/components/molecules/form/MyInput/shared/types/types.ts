import React from "react"

export type MyTextInputConfig = {
  type: 'text' | 'hidden' | 'number',
  label?: string,
  helper?: string,
  placeholder?: string,
  stateName: string,
  custom?: {
    isDisabled?: boolean,
    isRequired?: boolean,
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    pattern?: RegExp,
    classList?: string
  }
}

export type MyTextInputState = string | number
export type MyTextInputError = {
  message: string
} | null

export type MyTextInputProps = {
  config: MyTextInputConfig
  state: {
    get: MyTextInputState
    set: (value: MyTextInputState, error: MyTextInputError) => void
  }
}

export type MytextInputStyle = {
  isDisabled: boolean,
  hasError: boolean
}