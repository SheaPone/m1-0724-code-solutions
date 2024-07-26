/* exported pick */
function pick(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const newObject: Record<string, any> = {};
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
