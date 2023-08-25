import buttons from "./shared/constants/buttons"
import { MyButtonProps } from "./shared/types/types"
import { buttonCustom } from "./styles/styles"
import clsx from "clsx"

const MyButton = (props: MyButtonProps) => {
  const buttonStyle = buttons({
    isDisabled: props.disabled
  })[props.type][props.importance]

  return (
    <button
      className={clsx(props.className, buttonStyle, buttonCustom)}
      onClick={props.onClick}
      type={props.isSubmit ? 'submit' : 'button'}
    >
      {props.children}
    </button>
  )
}

export default MyButton