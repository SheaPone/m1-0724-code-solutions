'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
