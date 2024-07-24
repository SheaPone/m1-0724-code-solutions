'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const wordIsLowerCased = word.toLowerCase();
  if (wordIsLowerCased === word) {
    return true;
  } else {
    return false;
  }
}
