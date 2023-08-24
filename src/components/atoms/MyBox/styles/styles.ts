import { css } from "@emotion/css";
import colors from "../../../../shared/constants/design-system/colors";

export const myBoxStyle = ({
  hasBorder = true,
}) => css`
  border: ${hasBorder ? `1px solid ${colors.grey[500]}` : "none"};
  background-color: ${colors.white};
`