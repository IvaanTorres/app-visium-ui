import { css } from "@emotion/css";

export const hambuergerStyle = (direction: 'row' | 'column') => css`
  display: flex;
  flex-direction: ${direction};
  height: 100%;

  & > :first-child, & > :last-child {
    flex: 0 0 auto;
  }

  & > :nth-child(2) {
    flex: 1 1 auto;
  }
`