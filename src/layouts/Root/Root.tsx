import { RootProps } from "./shared/types/types"
import { RootCustom } from "./styles/styles"

const Root = (props: RootProps) => {

  return (
    <RootCustom>
      {props.children}
    </RootCustom>
  )
}

export default Root