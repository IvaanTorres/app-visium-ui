import { css } from '@emotion/css'
import colors from '../../../../shared/constants/design-system/colors'

export const buttonCustom = css`
  border: none;
`

/* ---------------------------------- Types --------------------------------- */

// Info
export const infoPrimary = css`
  background-color: ${colors.blue[500]};
  color: ${colors.white};
`

export const infoSecondary = css`
  background-color: ${colors.white};
  color: ${colors.blue[500]};
`

export const infoTertiary = css`
  background-color: transparent;
  color: ${colors.blue[500]};
`

// Success
export const successPrimary = css`
  background-color: ${colors.green[500]};
  color: ${colors.white};
`

export const successSecondary = css`
  background-color: ${colors.white};
  color: ${colors.green[500]};
`

export const successTertiary = css`
  background-color: transparent;
  color: ${colors.green[500]};
`

// Warning
export const warningPrimary = css`
  background-color: ${colors.yellow[500]};
  color: ${colors.white};
`

export const warningSecondary = css`
  background-color: ${colors.white};
  color: ${colors.yellow[500]};
`

export const warningTertiary = css`
  background-color: transparent;
  color: ${colors.yellow[500]};
`

// Danger
export const dangerPrimary = css`
  background-color: ${colors.red[500]};
  color: ${colors.white};
`

export const dangerSecondary = css`
  background-color: ${colors.white};
  color: ${colors.red[500]};
`

export const dangerTertiary = css`
  background-color: transparent;
  color: ${colors.red[500]};
`