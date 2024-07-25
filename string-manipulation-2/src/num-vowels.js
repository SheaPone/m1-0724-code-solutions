'use strict';
/* exported numVowels */
function numVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a') {
      count++;
    } else if (string[i].toLowerCase() === 'e') {
      count++;
    } else if (string[i].toLowerCase() === 'i') {
      count++;
    } else if (string[i].toLowerCase() === 'o') {
      count++;
    } else if (string[i].toLowerCase() === 'u') {
      count++;
    }
  }
  return count;
}
