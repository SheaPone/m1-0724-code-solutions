'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  for (let i = Math.max(string.length - length, 0); i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
