const getInitialLetters = (text: string) => {
  const words = text.split(' ');
  const firstLetters = words.map(word => word[0]);
  return firstLetters.join('').toUpperCase();
}

export default getInitialLetters;