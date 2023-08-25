import { css } from "@emotion/css";
import spaces from "../../../../shared/constants/design-system/spaces";

export const myFormStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${spaces.size_xs};
  
  .fields {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${spaces.size_3xs};
  }

  .buttons {
    flex: 0 0 auto;
  }
`

export const myButtonStyle = css`
  display: inline-block;
  height: 50px;
  min-width: 200px;
`