import {css} from '@emotion/css'
import colors from '../../../../shared/constants/design-system/colors'

export const myAvatarStyle = ({
  size = 50,
}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${size}px;
  height: ${size}px;
  background-color: ${colors.white};
  border-radius: 50%;
  overflow: hidden;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:not(img){
    color: ${colors.grey[600]};
  }
`