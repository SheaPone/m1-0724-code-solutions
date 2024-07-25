'use strict';
/* exported truncate */
function truncate(length, string) {
  let newString = '';
  for (let i = 0; i < Math.min(length, string.length); i++) {
    newString += string[i];
  }
  return newString + '...';
}
