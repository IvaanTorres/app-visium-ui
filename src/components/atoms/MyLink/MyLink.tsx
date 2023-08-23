import clsx from "clsx"
import { MyLinkProps } from "./shared/types/types"
import { myLinkStyle } from "./styles/styles"
import { useNavigate } from "react-router-dom"

const MyLink = (props: MyLinkProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(props.to, {
      state: props.state
    })
  }

  return (
    <p onClick={handleClick} className={clsx(props.className, myLinkStyle)}>{props.children}</p>
  )
}

export default MyLink