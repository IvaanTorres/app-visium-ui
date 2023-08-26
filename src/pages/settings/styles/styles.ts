import { css } from "@emotion/css";
import spaces from "../../../shared/constants/design-system/spaces";
import colors from "../../../shared/constants/design-system/colors";
import fontSizes from "../../../shared/constants/design-system/font-sizes";
import fontWeights from "../../../shared/constants/design-system/font-weights";

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
export const dangerModalStyle = css`
  border: 1px solid ${colors.red[500]};

  .top-bar {
    background-color: ${colors.red[500]};
    border-bottom: 1px solid ${colors.white};

    .title, .close {
      color: ${colors.white};
      border-color: ${colors.white};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .description {
      font-size: ${fontSizes.text_sm};

      .title {
        /* text-align: center; */
        font-size: ${fontSizes.text_lg};
        font-weight: ${fontWeights.bold};
        margin: ${spaces.size_2xs} 0;
      }
    }
  }
`