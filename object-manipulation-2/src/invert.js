'use strict';
/* exported invert */
function invert(source) {
  let newObject = {};
  for (const key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
