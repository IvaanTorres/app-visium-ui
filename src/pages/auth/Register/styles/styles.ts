import styled from '@emotion/styled'
import colors from '../../../../shared/constants/design-system/colors'
import { css } from '@emotion/css'

export const AuthWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.blue[500]};
`

export const langSelectStyle = css`
  position: absolute;
  top: 0;
  right: 0;
`