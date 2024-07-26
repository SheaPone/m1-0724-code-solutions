'use strict';
/* exported omit */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
function omit(source, keys) {
  let newObject = {};
  for (const key in source) {
    if (!includes(keys, key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
