'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  let noNull = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) {
      delete values[i];
    } else {
      noNull.push(values[i]);
    }
  }
  return noNull;
}
