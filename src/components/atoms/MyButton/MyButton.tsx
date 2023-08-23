import buttons from "./shared/constants/buttons"
import { MyButtonProps } from "./shared/types/types"
import { buttonCustom } from "./styles/styles"
import clsx from "clsx"

const MyButton = (props: MyButtonProps) => {
  const buttonStyle = buttons[props.type][props.importance]

  return (
    <button
      className={clsx(props.className, buttonStyle, buttonCustom)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default MyButton