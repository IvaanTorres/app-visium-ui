import { RootProps } from "./shared/types/types"
import { RootCustom } from "./styles/styles"

const RootLayout = (props: RootProps) => (
  <RootCustom>
    {props.children}
  </RootCustom>
)

export default RootLayout