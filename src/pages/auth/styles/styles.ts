import styled from '@emotion/styled'
import colors from '../../../shared/constants/design-system/colors'

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.blue[500]};
`