/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx"
import { MyTextInputProps, MyTextInputState } from "./shared/types/types"
import { myTextInputStyle } from "./styles/styles"
import { useToggle } from "../../../../shared/hooks/useToggle"
import MyIcon from "../../../atoms/MyIcon/MyIcon"
import { ICON_VISIBILITY, ICON_VISIBILITY_OFF } from "../../../../shared/constants/icons/icons"
import { SELECTABLE_FOR_HIDDING } from "./shared/constants/constants"
import { startTransition, useEffect, useState } from "react"
import colors from "../../../../shared/constants/design-system/colors"
import useDebounce from "../../../../shared/hooks/useDebounce"
// import { BLOCKED_CHARS } from "../../../../shared/constants/texts/forms"
import { MyFieldError } from "../../../../shared/types/texts/forms/forms"
import { MyFieldErrorStyled, MyFieldHelperStyled, MyFieldLabelStyled } from "../../../../shared/styles/form"
import testMultipleRegex from "../../../../shared/helpers/testMultipleRegex"
// import hasSpecialChars from "../../../../shared/helpers/hasSpecialChars"

const MyInput = (props: MyTextInputProps) => {
  const [value, setValue] = useState(props.state.get ?? '')
  const [error, setError] = useState<MyFieldError | null>(null)
  const [isContentHidden, toggleContentHidden] = useToggle(true)
  const [debouncedValue, isDebouncing] = useDebounce(value, 300);

  const inputCustomConfig = props.config.custom
  const canHide = props.config.type === 'hidden'
  const isRequired = props.config.custom?.isRequired
  const type = (
    canHide
      ? isContentHidden
          ? 'password'
          : 'text'
      : props.config.type
)

  useEffect(() => {
    if(!isDebouncing){
      startTransition(() => {
        props.state.set(debouncedValue, error);
      })
    }
  }, [debouncedValue, error]);

  const checkErrors = (val: MyTextInputState) => {
    const isRequired = props.config.custom?.isRequired
    const pattern = props.config.custom?.pattern
    const stringifiedValue = val.toString()

    // Ordered by priority
    const conditions = [
      {
        check: isRequired && (!val || stringifiedValue.length <= 0),
        error: {
          message: 'This field is required'
        }
      },
      {
        check: pattern && !(testMultipleRegex(pattern, stringifiedValue)),
        error: {
          message: `Invalid ${(props.config.label ?? 'value')?.toLowerCase()}`
        }
      },
      // {
      //   check: hasSpecialChars(stringifiedValue, 'email'),
      //   error: {
      //     message: `Invalid ${(props.config.label ?? 'value')?.toLowerCase()}. Blocked characters: ${BLOCKED_CHARS['email'].join(', ')}`
      //   }
      // },
    ]

    const valueErrors = conditions.find(condition => condition.check)

    if(valueErrors) {
      const error: MyFieldError = {
        message: valueErrors.error.message,
        stateName: props.config.stateName,
      }
      setError(error);
    } else {
      setError(null);
    }
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!props.config.custom?.isDisabled){
      const newValue = e.target.value
      setValue(newValue)
      checkErrors(newValue)
    }
  }

  return (
    <div className={clsx((inputCustomConfig?.classList), myTextInputStyle({
      isDisabled: inputCustomConfig?.isDisabled ?? false,
      hasError: Boolean(error),
    }))}>
      {props.config.label && (<MyFieldLabelStyled className="label">{props.config.label}{isRequired ? '*' : ''}</MyFieldLabelStyled>)}
      <div className="input-wrapper">
        {(inputCustomConfig?.prefix) && <span className="input-prefix">{inputCustomConfig.prefix}</span>}
        <input className="input" type={type} value={value} onChange={handleChangeInput} placeholder={props.config.placeholder} disabled={props.config.custom?.isDisabled} />
        <span className="input-suffix">{(inputCustomConfig?.suffix) ?? (
          (canHide && SELECTABLE_FOR_HIDDING.includes(type)) && (
            isContentHidden
              ? <MyIcon onClick={toggleContentHidden} icon={ICON_VISIBILITY} size={30} color={error ? colors.red[500] : colors.grey[500]} />
              : <MyIcon onClick={toggleContentHidden} icon={ICON_VISIBILITY_OFF} size={30} color={error ? colors.red[500] : colors.grey[500]} />
          ))}
        </span>
      </div>
      {props.config.helper && (<MyFieldHelperStyled className="helper">{props.config.helper}</MyFieldHelperStyled>)}
      {error && (<MyFieldErrorStyled className="error">{error.message}</MyFieldErrorStyled>)}
    </div>
  )
}

export default MyInput