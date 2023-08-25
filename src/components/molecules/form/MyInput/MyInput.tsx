/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx"
import { MyTextInputError, MyTextInputProps, MyTextInputState } from "./shared/types/types"
import { myTextInputStyle } from "./styles/styles"
import { useToggle } from "../../../../shared/hooks/useToggle"
import MyIcon from "../../../atoms/MyIcon/MyIcon"
import { ICON_VISIBILITY, ICON_VISIBILITY_OFF } from "../../../../shared/constants/icons/icons"
import { SELECTABLE_FOR_HIDDING } from "./shared/constants/constants"
import { startTransition, useEffect, useState } from "react"
import colors from "../../../../shared/constants/design-system/colors"
import useDebounce from "../../../../shared/hooks/useDebounce"
import { hasSpecialChars } from "../../../../shared/helpers/hasSpecialChars"
import { BLOCKED_CHARS } from "../../../../shared/constants/texts/forms"

const MyInput = (props: MyTextInputProps) => {
  const [value, setValue] = useState(props.state.get)
  const [error, setError] = useState<MyTextInputError | null>(null)
  const [isContentHidden, toggleContentHidden] = useToggle(false)
  const debouncedValue = useDebounce(value, 300);

  const inputCustomConfig = props.config.custom
  const canHide = props.config.type === 'hidden'
  const type = (
    canHide
      ? isContentHidden
          ? 'password'
          : 'text'
      : props.config.type
)

  useEffect(() => {
    startTransition(() => {
      props.state.set(debouncedValue, error);
    })
  }, [debouncedValue, props.state, error]);

  useEffect(() => {
    if(value){
      checkErrors(value)
    }
  }, [value])

  const checkErrors = (value: MyTextInputState) => {
    const isRequired = props.config.custom?.isRequired
    const pattern = props.config.custom?.pattern
    const stringifiedValue = value.toString()

    // Ordered by priority
    const conditions = [
      {
        check: !(pattern?.test(stringifiedValue)),
        error: {
          message: `Invalid ${(props.config.label ?? 'value')?.toLowerCase()}`
        }
      },
      {
        check: isRequired && !value,
        error: {
          message: 'This field is required'
        }
      },
      {
        check: hasSpecialChars(stringifiedValue, 'email'),
        error: {
          message: `Invalid ${(props.config.label ?? 'value')?.toLowerCase()}. Blocked characters: ${BLOCKED_CHARS['email'].join(', ')}`
        }
      },
      {
        check: stringifiedValue.length <= 0,
        error: {
          message: 'This field is required'
        }
      }
    ]

    const valueErrors = conditions.find(condition => condition.check)
    setError(valueErrors?.error ?? null);
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!props.config.custom?.isDisabled){
      setValue(e.target.value)
    }
  }

  return (
    <div className={clsx((inputCustomConfig?.classList), myTextInputStyle({
      isDisabled: inputCustomConfig?.isDisabled ?? false,
      hasError: Boolean(error),
    }))}>
      {props.config.label && (<label className="label">{props.config.label}</label>)}
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
      {props.config.helper && (<span className="helper">{props.config.helper}</span>)}
      {error && (<span className="error">{error.message}</span>)}
    </div>
  )
}

export default MyInput