import { css } from "@emotion/css";
import colors from "../../../../shared/constants/design-system/colors";

export const myPagePropsStyle = css`
  z-index: 1000;
  position: fixed;
  background-color: ${colors.black};
  opacity: 0.5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`