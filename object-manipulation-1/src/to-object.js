'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  let object = {};
  let key = keyValuePair[0];
  let value = keyValuePair[1];
  object[key] = value;
  return object;
}
