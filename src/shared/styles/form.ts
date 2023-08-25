import styled from '@emotion/styled'
import colors from '../constants/design-system/colors'
import fontSizes from '../constants/design-system/font-sizes'
import spaces from '../constants/design-system/spaces'

export const MyFieldLabelStyled = styled.label`
  font-size: ${fontSizes.text_4xs};
  line-height: ${spaces.size_3xs};
  color: ${colors.grey[500]};
`
export const MyFieldHelperStyled = styled.div`
  line-height: ${fontSizes.text_4xs};
  color: ${colors.grey[500]};
  font-size: ${fontSizes.text_4xs};
`
export const MyFieldErrorStyled = styled.div`
  font-size: ${fontSizes.text_4xs};
  line-height: ${spaces.size_3xs};
  color: ${colors.red[500]};
`