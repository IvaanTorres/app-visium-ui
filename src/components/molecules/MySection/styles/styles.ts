import { css } from "@emotion/css";
import fontSizes from "../../../../shared/constants/design-system/font-sizes";
import spaces from "../../../../shared/constants/design-system/spaces";
import colors from "../../../../shared/constants/design-system/colors";

export const mySectionStyle = css`
  display: flex;
  flex-direction: column;

  .title {
    flex: 0 0 auto;
    border-bottom: 1px solid ${colors.black};
    font-size: ${fontSizes.text_xl};
    padding: ${spaces.size_4xs} 0px;
  }

  .content {
    flex: 1 1 auto;
    padding: ${spaces.size_4xs} 0px;
  } 
`