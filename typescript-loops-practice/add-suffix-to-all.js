'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let suffixArray = [];
  for (let i = 0; i < words.length; i++) {
    suffixArray.push(words[i] + suffix);
  }
  return suffixArray;
}
