import { MyAvatarProps } from "./shared/types/types"
import clsx from "clsx"
import { myAvatarStyle } from "./styles/styles"
import isSupportedImage from "../../../shared/helpers/isSupportedImage"

const MyAvatar = (props: MyAvatarProps) => {
  const content = props.value

  return (
    <div className={clsx(props.className, myAvatarStyle({
      size: props.size,
    }))}>
      {isSupportedImage(content) ? (
        <img src={content} alt="avatar" />
      ) : (
        <div>{content}</div>
      )}
    </div>
  )
}

export default MyAvatar