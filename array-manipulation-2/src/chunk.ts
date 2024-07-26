/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
