'use strict';
/* exported capitalize */
function capitalize(word) {
  const upperCased = word[0].toUpperCase();
  const lowerCased = word.slice(1).toLowerCase();
  return upperCased + lowerCased;
}
