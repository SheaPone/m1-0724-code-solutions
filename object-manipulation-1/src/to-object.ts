/* exported toObject */
function toObject(keyValuePair: [string, any]): object {
  const object = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  object[key] = value;
  return object;
}
