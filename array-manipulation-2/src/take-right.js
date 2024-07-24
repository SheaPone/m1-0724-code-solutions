'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let newArray = [];
  for (let i = Math.max(array.length - count, 0); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
