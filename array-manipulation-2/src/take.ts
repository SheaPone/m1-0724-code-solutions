/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
