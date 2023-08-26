import styled from '@emotion/styled';
import fontFamilies from '../../../shared/constants/design-system/font-families';

// Initial style
export const RootCustom = styled('div')`
  font-family: ${fontFamilies.primary};
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`