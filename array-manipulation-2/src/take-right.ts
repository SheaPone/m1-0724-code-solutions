/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  const newArray: any[] = [];
  for (let i = Math.max(array.length - count, 0); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
