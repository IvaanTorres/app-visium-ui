import { css } from "@emotion/css";
import colors from "../../../../../shared/constants/design-system/colors";
import { MytextInputStyle } from "../shared/types/types";
import fontWeights from "../../../../../shared/constants/design-system/font-weights";

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

export const myTextInputStyle = ({
  isDisabled,
  hasError
}: MytextInputStyle) => css`
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
    background-color: ${isDisabled ? colors.grey[900] : colors.white};
    border: ${hasError ? `1px solid ${colors.red[500]}` : `1px solid ${colors.grey[300]}`};
    box-sizing: border-box;
    height: 40px;
    gap: 10px;
    cursor: ${isDisabled ? 'not-allowed' : 'usnet'};

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
      font-weight: ${fontWeights.bold};
      line-height: 20px;
      color: ${isDisabled ? colors.grey[600] : colors.black};
      width: 100%;
      cursor: ${isDisabled ? 'not-allowed' : 'usnet'};
      transition: border-color 0.2s ease-in-out;
    }

    .input-suffix {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
      padding: 0px 5px;
    }
  }

  .error {
    font-size: 12px;
    line-height: 20px;
    color: ${colors.red[500]};
  }
`