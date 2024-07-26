/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  const newArray: any[] = [];
  for (let i = 0; i < Math.max(array.length - count, 0); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
