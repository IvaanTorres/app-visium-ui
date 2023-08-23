import clsx from "clsx";
import colors from "../../../shared/constants/design-system/colors";
import MySpinner from "../../atoms/MySpinner/MySpinner";
import { MyPageLoaderProps } from "./shared/types/types";
import { myPagePropsStyle } from "./styles/styles";

const MyPageLoader = (props: MyPageLoaderProps) => {

  return (
    <div className={clsx(props.className, myPagePropsStyle)}>
      <MySpinner size={50} color={colors.white} />
    </div>
  )
};

export default MyPageLoader;