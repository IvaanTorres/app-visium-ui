import { css } from "@emotion/css";
import colors from "../../../../../shared/constants/design-system/colors";
import spaces from "../../../../../shared/constants/design-system/spaces";
import fontWeights from "../../../../../shared/constants/design-system/font-weights";

export const mySelectStyle = css`
  .label {}

  .select {

    .field {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      align-items: center;
      box-sizing: border-box;
      padding: 0px ${spaces.size_4xs};
      height: 40px;
      border: 1px solid ${colors.grey[700]};
      background-color: ${colors.white};
      font-weight: ${fontWeights.bold};

    }

    .options {
      position: absolute;
      width: 100%;
      z-index: 1;
      margin-top: ${spaces.size_6xs};
      border: 1px solid ${colors.grey[700]};
      background-color: ${colors.white};

      .option {
        padding: 0px ${spaces.size_4xs};
        height: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        background-color: ${colors.white};
        transition: all 0.1s ease-in-out;

        &:hover {
          background-color: ${colors.blue[900]};
          font-weight: ${fontWeights.medium};
        }

        &:nth-child(even){
          background-color: ${colors.grey[900]};

          &:hover {
            background-color: ${colors.blue[900]};
            font-weight: ${fontWeights.medium};
          }
        }

        &:not(:last-child) {
          border-bottom: 1px solid ${colors.grey[700]};
        }
      }
    }
  }

  .helper {}

  .error {}
`