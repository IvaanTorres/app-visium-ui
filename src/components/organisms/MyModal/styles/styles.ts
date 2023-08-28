import { css } from "@emotion/css";
import colors from "../../../../shared/constants/design-system/colors";
import fontWeights from "../../../../shared/constants/design-system/font-weights";
import spaces from "../../../../shared/constants/design-system/spaces";
import fontSizes from "../../../../shared/constants/design-system/font-sizes";

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
    gap: ${spaces.size_4xs};
    flex: 0 0 40px;
  }
`

/* ---------------------------------- Types --------------------------------- */

export const info = css`
  border: 1px solid ${colors.blue[500]};

  .top-bar {
    background-color: ${colors.blue[500]};
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

export const warning = css`
  border: 1px solid ${colors.yellow[500]};

  .top-bar {
    background-color: ${colors.yellow[500]};
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

export const danger = css`
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

export const success = css`
  border: 1px solid ${colors.green[500]};

  .top-bar {
    background-color: ${colors.green[500]};
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