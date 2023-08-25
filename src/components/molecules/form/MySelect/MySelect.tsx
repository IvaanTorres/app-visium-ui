import clsx from "clsx"
import { MySelectOption, MySelectProps } from "./shared/types/types"
import { mySelectStyle } from "./styles/styles"
import { useState } from "react"
import { MyFieldError } from "../../../../shared/types/texts/forms/forms"
import { MyFieldErrorStyled, MyFieldHelperStyled, MyFieldLabelStyled } from "../../../../shared/styles/form"
import MyIcon from "../../../atoms/MyIcon/MyIcon"
import { useToggle } from "../../../../shared/hooks/useToggle"

const MySelect = (props: MySelectProps) => {
  const [currentValue, setCurrentValue] = useState<MySelectOption | null>(null)
  const [error, setError] = useState<MyFieldError>(null)
  const [isOpened, toggleIsOpened] = useToggle(false)

  const handleChange = (option: MySelectOption) => {
    setCurrentValue(option)
    props.state.set(option, error)
    toggleIsOpened()

    // Remove
    setError(null)
  }

  return (
    <div className={clsx(props.config.custom?.classList, mySelectStyle)}>
      {props.config.label && (<MyFieldLabelStyled className="label">{props.config.label}</MyFieldLabelStyled>)}
      <div className="select">
        <div className="field" onClick={toggleIsOpened}>
          <div>{currentValue?.label}</div>
          {props.config.custom?.hasDropdownIcon && (<MyIcon icon={isOpened ? 'ico-up' : 'ico-down'} size={20} />)}
        </div>
        {isOpened && (
          <div className="options">
            {props.config.options.map((option) => (
              <div key={`option-${option.id}`} className="option" onClick={() => handleChange(option)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {props.config.helper && (<MyFieldHelperStyled className="helper">{props.config.helper}</MyFieldHelperStyled>)}
      {error && (<MyFieldErrorStyled className="error">{error.message}</MyFieldErrorStyled>)}
    </div>
  )
}

export default MySelect
