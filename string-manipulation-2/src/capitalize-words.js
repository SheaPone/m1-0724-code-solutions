'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let newString = '';
  let wordsArr = string.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    newString += capitalizeWord(wordsArr[i]) + ' ';
  }
  return newString.trim();
}
