import clsx from "clsx"
import { MyBoxProps } from "./shared/types/types"
import { myBoxStyle } from "./styles/styles"

const MyBox = (props: MyBoxProps) => {

  return (
    <div className={clsx(props.className, myBoxStyle({
      hasBorder: props.hasBorder,
    }))}>
      {props.children}
    </div>
  )
}

export default MyBox