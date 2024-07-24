'use strict';
/* exported drop */
function drop(array, count) {
  let newArray = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
