'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  let noStrings = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      delete values[i];
    } else {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
