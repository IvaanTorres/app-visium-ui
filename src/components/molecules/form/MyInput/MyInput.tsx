import clsx from "clsx"
import { MyTextInputProps } from "./shared/types/types"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyInput = (props: MyTextInputProps) => {

  return (
    <div className={clsx()}>
      <label>Label</label>
      <input type="text" />
      <span>Error</span>
    </div>
  )
}

export default MyInput