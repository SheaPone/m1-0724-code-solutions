/* exported getValues */
function getValues(object: object): any[] {
  const newArray: any[] = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
