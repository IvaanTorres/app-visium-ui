import { FIELD_TYPES } from "../../../../../shared/constants/texts/forms";

// You can add fields types here to use or not an specific field component in the form
export const FIELD_TYPES_GROUPS = {
  INPUT: [FIELD_TYPES.TEXT, FIELD_TYPES.HIDDEN, FIELD_TYPES.NUMBER],
  SELECT: [FIELD_TYPES.SELECT],
  // Add more field types here when needed
}