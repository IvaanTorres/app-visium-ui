import { css } from "@emotion/css";
import spaces from "../../../../shared/constants/design-system/spaces";
import fontSizes from "../../../../shared/constants/design-system/font-sizes";
import colors from "../../../../shared/constants/design-system/colors";
import fontWeights from "../../../../shared/constants/design-system/font-weights";

export const mySidebarStyle = css`
  width: 300px;
  background-color: ${colors.blue[500]};
  border-right: 1px solid ${colors.blue[500]};

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spaces.size_2xs};

    .links {
      margin-top: ${spaces.size_2xs};
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: ${spaces.size_6xs};
      width: 100%;
    }
  }

  .menu {
    background-color: ${colors.white};
  }

  .settings {
    border-top: 1px solid ${colors.blue[500]};
  }
`

export const avatarStyle = css`
  & > div {
    font-size: ${fontSizes.text_2xl};
    color: ${colors.blue[500]};
  }
`

export const linkStyle = css`
  color: ${colors.white};
`

export const settingButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: ${fontWeights.bold};
  padding: ${spaces.size_3xs};
`