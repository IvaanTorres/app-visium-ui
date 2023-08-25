import clsx from "clsx"
import { MySelectOption, MySelectProps } from "./shared/types/types"
import { mySelectStyle } from "./styles/styles"
import { useState } from "react"
import { MyFieldHelperStyled, MyFieldLabelStyled } from "../../../../shared/styles/form"
import MyIcon from "../../../atoms/MyIcon/MyIcon"
import { useToggle } from "../../../../shared/hooks/useToggle"
import isSupportedImage from "../../../../shared/helpers/isSupportedImage"

const MySelect = (props: MySelectProps) => {
  const [currentValue, setCurrentValue] = useState<MySelectOption | null>(props.config.options.find((option) => option.isDefault) || null)
  const [isOpened, toggleIsOpened] = useToggle(false)

  const handleChange = (option: MySelectOption) => {
    setCurrentValue(option)
    props.state.set(option)

    toggleIsOpened()
  }

  return (
    <div className={clsx(props.config.custom?.classList, mySelectStyle)}>
      {props.config.label && (<MyFieldLabelStyled className="label">{props.config.label}</MyFieldLabelStyled>)}
      <div className="select">
        <div className="field" onClick={toggleIsOpened}>
          {currentValue?.label && isSupportedImage(currentValue.label) ? (
            <img src={currentValue.label} alt={currentValue.id} />
          ) : (
            <div>{currentValue?.label}</div>
          )}
          {props.config.custom?.hasDropdownIcon && (<MyIcon icon={isOpened ? 'ico-up' : 'ico-down'} size={20} />)}
        </div>
        {isOpened && (
          <div className="options">
            {props.config.options.map((option) => (
              <div key={`option-${option.id}`} className="option" onClick={() => handleChange(option)}>
                {option?.label && isSupportedImage(option.label) ? (
                  <img src={option.label} alt={option.id} />
                ) : (
                  <div>{option?.label}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {props.config.helper && (<MyFieldHelperStyled className="helper">{props.config.helper}</MyFieldHelperStyled>)}
    </div>
  )
}

export default MySelect
