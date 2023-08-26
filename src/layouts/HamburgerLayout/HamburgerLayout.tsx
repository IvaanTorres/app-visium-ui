import clsx from "clsx"
import { HamburgerLayoutProps } from "./shared/stypes/types"
import { hambuergerStyle } from "./style/styles"

const HamburgerLayout = (props: HamburgerLayoutProps) => (
  <div className={clsx(props.className, hambuergerStyle(props.direction))}>
    {props.children}
  </div>
)

export default HamburgerLayout