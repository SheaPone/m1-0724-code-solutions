'use strict';
/* exported pick */
function pick(source, keys) {
  let newObject = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
