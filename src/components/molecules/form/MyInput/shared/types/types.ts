import React from "react"

export type MyTextInputConfig = {
  type: 'text' | 'hidden' | 'number',
  label: string,
  helper: string,
  placeholder: string,
  stateName: string,
  custom?: {
    isDisabled?: boolean,
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    pattern?: RegExp,
    classList?: string
  }
}

export type MyTextInputState = string | number

export type MyTextInputProps = {
  config: MyTextInputConfig
  state: {
    getter: MyTextInputState
    setter: (value: MyTextInputState) => void
  }
}