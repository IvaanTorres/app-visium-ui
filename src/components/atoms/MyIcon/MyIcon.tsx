import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "../../../assets/icons/selection.json";

const MyIcon = (props: IconProps) => (
  <IcoMoon iconSet={iconSet} {...props} />
)

export default MyIcon