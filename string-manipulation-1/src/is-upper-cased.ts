/* exported isUpperCased */
function isUpperCased(word: string): any {
  const wordIsUpperCased = word.toUpperCase();
  if (wordIsUpperCased === word) {
    return true;
  } else {
    return false;
  }
}
