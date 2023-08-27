import MyModal from "../../components/organisms/MyModal/MyModal";
import colors from "../constants/design-system/colors";
import fontSizes from "../constants/design-system/font-sizes";
import fontWeights from "../constants/design-system/font-weights";
import spaces from "../constants/design-system/spaces";
import styled from "@emotion/styled";

export const DangerModalCustom = styled(MyModal)`
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