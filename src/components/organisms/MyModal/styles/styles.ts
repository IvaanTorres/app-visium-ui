import { css } from "@emotion/css";
import colors from "../../../../shared/constants/design-system/colors";
import fontWeights from "../../../../shared/constants/design-system/font-weights";
import spaces from "../../../../shared/constants/design-system/spaces";

export const myModalStyle = ({
  hasPadding = true,
}) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  min-height: 300px;
  max-height: 600px;
  width: 800px;
  overflow-y: auto;

  .top-bar {
    display: flex;
    justify-content: space-between;
    flex: 0 0 40px;
    border-bottom: 1px solid ${colors.grey[500]};

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: ${spaces.size_4xs};
      font-weight: ${fontWeights.bold};
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 40px;
      border-left: 1px solid ${colors.grey[500]};
    }
  }

  .content {
    flex: 1 1 auto;
    background-color: ${colors.white};
    padding: ${hasPadding ? spaces.size_4xs : 0};
  }

  .bottom-bar {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    flex: 0 0 40px;
  }
`