'use strict';
/* exported dropRight */
function dropRight(array, count) {
  let newArray = [];
  for (let i = 0; i < Math.max(array.length - count, 0); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
