'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  let newString = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  for (let i = 0; i < word.length; i++) {
    newString = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return newString;
}
