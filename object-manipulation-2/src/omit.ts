/* exported omit */
function includes(array: unknown[], value: any): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
function omit(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const newObject: Record<string, any> = {};
  for (const key in source) {
    if (!includes(keys, key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
