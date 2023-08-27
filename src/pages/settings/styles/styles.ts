import { css } from "@emotion/css";
import spaces from "../../../shared/constants/design-system/spaces";
import colors from "../../../shared/constants/design-system/colors";

export const settingsPageStyle = css`
  padding: ${spaces.size_2xs};
  background-color: ${colors.white};
  /* The padding was causing the scroll */
  min-height: calc(100% - ${spaces.size_2xs} * 2);

  & > .title {
    font-size: 60px;
  }

  & > .content {
    margin-top: ${spaces.size_2xs};
  }
`

export const dangerSectionStyle = css`
  .title {
    color: ${colors.red[500]};
    border-color: ${colors.red[500]};
  }
`
