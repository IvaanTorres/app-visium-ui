import clsx from "clsx";
import { MySpinnerProps } from "./shared/types/types";
import { mySpinnerStyle } from "./styles/styles";

const MySpinner = (props: MySpinnerProps) => {

  return (
    <div className={clsx(props.className, mySpinnerStyle({
      size: props.size,
      color: props.color,
    }))}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default MySpinner;