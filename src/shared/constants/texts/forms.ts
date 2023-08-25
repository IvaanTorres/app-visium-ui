export const BLOCKED_CHARS = {
  general: ['>', '<', '!', '#', '@', '.', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', '|', '\\', '/', '?', ',', '`', '~', ':', ';', '"', "'"],
  email: ['>', '<', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', '|', '\\', '/', '?', ',', '`', '~', ':', ';', '"', "'"],
  // Add more blocked chars here when needed for a specific case or pattern
}

export const FIELD_TYPES = {
  TEXT: 'text',
  HIDDEN: 'hidden',
  NUMBER: 'number',
  SELECT: 'select',
  // Add more field types here when needed
}