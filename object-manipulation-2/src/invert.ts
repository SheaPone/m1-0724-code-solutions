/* exported invert */
function invert(source: Record<string, any>): Record<string, any> {
  const newObject: Record<string, any> = {};
  for (const key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
