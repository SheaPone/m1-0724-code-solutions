'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
