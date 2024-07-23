'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const wordIsUpperCased = word.toUpperCase();
  if (wordIsUpperCased === word) {
    return true;
  } else {
    return false;
  }
}
