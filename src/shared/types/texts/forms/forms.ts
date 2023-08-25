import { BLOCKED_CHARS } from "../../../constants/texts/forms";

export type BlockedCharsType = typeof BLOCKED_CHARS

export type MyFieldError = {
  stateName: string
  message: string
} | null