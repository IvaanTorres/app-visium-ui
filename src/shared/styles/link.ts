import styled from '@emotion/styled';
import fontWeights from '../constants/design-system/font-weights';

export const LinkStyled = styled.p`
  font-weight: ${fontWeights.bold};
  margin: 0;
  display: inline-block;
  color: ${props => props.color};
`