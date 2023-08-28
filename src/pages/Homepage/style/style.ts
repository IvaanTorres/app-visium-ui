import { css } from "@emotion/css";
import spaces from "../../../shared/constants/design-system/spaces";
import colors from "../../../shared/constants/design-system/colors";

export const homepagePageStyle = (welcomingMessageSize: number) => css`
  padding: ${spaces.size_2xs};
  background-color: ${colors.white};
  height: 100%;
  /* The padding was causing the scroll */
  min-height: calc(100% - ${spaces.size_2xs} * 2);

  .title {
    font-size: ${welcomingMessageSize}px;
  }
`