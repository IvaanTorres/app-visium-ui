import { css } from "@emotion/css";
import colors from "../../../../shared/constants/design-system/colors";
import spaces from "../../../../shared/constants/design-system/spaces";
import { PROPORTIONAL_SIZES } from "../shared/constants/constants";

export const mySpinnerStyle = ({
  size = 80,
  color = colors.black,
}) => css`
  display: inline-block;
  position: relative;
  width: ${size}px;
  height: ${size}px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    /* width: 64px;
    height: 64px; */
    width: ${size * PROPORTIONAL_SIZES}px;
    height: ${size * PROPORTIONAL_SIZES}px;
    margin: ${spaces.size_5xs};
    border: ${spaces.size_5xs} solid ${color};
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${color} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }  
`