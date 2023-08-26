import { css } from '@emotion/css'
import colors from '../../../../shared/constants/design-system/colors'
import spaces from '../../../../shared/constants/design-system/spaces'

export const buttonCustom = css`
  border: none;
  /* padding: ${spaces.size_4xs} ${spaces.size_2xs}; */
  height: 50px;
  min-width: 200px;
  cursor: pointer;
`

/* ---------------------------------- Types --------------------------------- */

// Info
export const infoPrimary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[500] : colors.blue[500]};
  color: ${isDisabled ? colors.grey[900] : colors.white};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const infoSecondary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : colors.white};
  color: ${isDisabled ? colors.grey[500] : colors.blue[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const infoTertiary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : 'transparent'};
  color: ${isDisabled ? colors.grey[500] : colors.blue[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

// Success
export const successPrimary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[500] : colors.green[500]};
  color: ${isDisabled ? colors.grey[900] : colors.white};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const successSecondary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : colors.white};
  color: ${isDisabled ? colors.grey[500] : colors.green[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const successTertiary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : 'transparent'};
  color: ${isDisabled ? colors.grey[500] : colors.green[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

// Warning
export const warningPrimary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[500] : colors.yellow[500]};
  color: ${isDisabled ? colors.grey[900] : colors.white};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const warningSecondary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : colors.white};
  color: ${isDisabled ? colors.grey[500] : colors.yellow[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const warningTertiary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : 'transparent'};
  color: ${isDisabled ? colors.grey[500] : colors.yellow[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

// Danger
export const dangerPrimary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[500] : colors.red[500]};
  color: ${isDisabled ? colors.grey[900] : colors.white};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const dangerSecondary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : colors.white};
  color: ${isDisabled ? colors.grey[500] : colors.red[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`

export const dangerTertiary = (isDisabled?: boolean) => css`
  background-color: ${isDisabled ? colors.grey[900] : 'transparent'};
  color: ${isDisabled ? colors.grey[500] : colors.red[500]};
  cursor: ${isDisabled ? 'not-allowed' : 'cursor'};
`