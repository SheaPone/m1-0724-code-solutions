/* exported isLowerCased */
function isLowerCased(word: string): any {
  const wordIsLowerCased = word.toLowerCase();
  if (wordIsLowerCased === word) {
    return true;
  } else {
    return false;
  }
}
