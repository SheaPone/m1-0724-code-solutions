'use strict';
/* exported getWords */
function getWords(string) {
  const newArray = [];
  const wordArray = string.split(' ');
  if (string === '') {
    return [];
  }
  for (let i = 0; i < wordArray.length; i++) {
    newArray.push(wordArray[i]);
  }
  return newArray;
}
