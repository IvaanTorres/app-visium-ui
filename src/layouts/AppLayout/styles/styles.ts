import { css } from "@emotion/css";

export const appLayoutStyle = css`
  display: flex;
  height: 100vh;

  & > aside {
    flex: 0 0 auto;
  }

  & > main {
    flex: 1 1 auto;
    height: 100%;
    overflow-y: auto;
  }
`