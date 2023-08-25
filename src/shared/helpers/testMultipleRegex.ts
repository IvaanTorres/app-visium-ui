const testMultipleRegex = (regexArray: RegExp[], value: string) => {
  return regexArray.some(regex => regex.test(value));
}

export default testMultipleRegex;