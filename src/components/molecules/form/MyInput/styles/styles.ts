import { css } from "@emotion/css";
import colors from "../../../../../shared/constants/design-system/colors";

const resetInputStyle = css`
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  outline: none;
  font-size: 100%;
  font-family: inherit;
  color: inherit;
  width: auto;
  box-sizing: content-box;
  vertical-align: middle;
`;

export const myTextInputStyle = css`
  display: flex;
  flex-direction: column;

  .label, .helper {
    font-size: 14px;
    line-height: 20px;
    color: ${colors.grey[500]};
  }

  .helper {
    font-size: 12px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid ${colors.grey[500]};
    box-sizing: border-box;
    height: 40px;
    gap: 10px;

    .input-prefix {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      padding: 0px 5px;
    }

    .input {
      ${resetInputStyle}
      height: 100%;
      font-size: 16px;
      line-height: 20px;
      color: #000;
      width: 100%;
      transition: border-color 0.2s ease-in-out;
    }

    .input-suffix {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      padding: 0px 5px;
    }
  }

  .error {
    font-size: 12px;
    line-height: 20px;
    color: ${colors.red[500]};
  }
`