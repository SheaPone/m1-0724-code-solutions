'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < Math.min(length, string.length); i++) {
    newString += string[i];
  }
  return newString;
}
