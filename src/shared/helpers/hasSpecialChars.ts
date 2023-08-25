import { BLOCKED_CHARS } from "../constants/texts/forms"
import { BlockedCharsType } from "../types/texts/forms/forms"

const hasSpecialChars = (value: string, type: keyof BlockedCharsType): boolean => {
  const chars = BLOCKED_CHARS[type]
  return chars.some(char => value.includes(char))
}

export default hasSpecialChars