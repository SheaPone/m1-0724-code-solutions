/* exported capitalize */
function capitalize(word: string): string {
  const upperCased = word[0].toUpperCase();
  const lowerCased = word.slice(1).toLowerCase();
  return upperCased + lowerCased;
}
