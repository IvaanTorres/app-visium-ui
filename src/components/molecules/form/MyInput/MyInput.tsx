import clsx from "clsx"
import { MyTextInputProps } from "./shared/types/types"
import { myTextInputStyle } from "./styles/styles"
import { useToggle } from "../../../../shared/hooks/useToggle"
import MyIcon from "../../../atoms/MyIcon/MyIcon"
import { ICON_VISIBILITY, ICON_VISIBILITY_OFF } from "../../../../shared/constants/icons/icons"
import { SELECTABLE_FOR_HIDDING } from "./shared/constants/constants"
import { startTransition, useEffect, useState } from "react"
import colors from "../../../../shared/constants/design-system/colors"
import useDebounce from "../../../../shared/hooks/useDebounce"

const MyInput = (props: MyTextInputProps) => {
  const [value, setValue] = useState(props.state.getter)
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

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    startTransition(() => {
      props.state.setter(debouncedValue);
    })
  }, [debouncedValue, props.state]);

  return (
    <div className={clsx((inputCustomConfig && inputCustomConfig.classList), myTextInputStyle)}>
      <label className="label">{props.config.label}</label>
      <div className="input-wrapper">
        {(inputCustomConfig && inputCustomConfig.prefix) && <span className="input-prefix">{inputCustomConfig.prefix}</span>}
        <input className="input" type={type} value={value} onChange={handleChangeInput} />
        <span className="input-suffix">{(inputCustomConfig && inputCustomConfig.suffix) ?? (
          (canHide && SELECTABLE_FOR_HIDDING.includes(type)) && (
            isContentHidden
              ? <MyIcon onClick={toggleContentHidden} icon={ICON_VISIBILITY} size={30} color={colors.grey[500]} />
              : <MyIcon onClick={toggleContentHidden} icon={ICON_VISIBILITY_OFF} size={30} color={colors.grey[500]} />
          ))}
        </span>
      </div>
      <span className="helper">{props.config.helper}</span>
      <span className="error">Error</span>
    </div>
  )
}

export default MyInput