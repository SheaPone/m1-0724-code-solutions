/* exported getKeys */
function getKeys(object: object): any[] {
  const newArray: any[] = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
