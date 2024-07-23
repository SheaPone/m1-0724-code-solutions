/* exported getIndexes */
function getIndexes(array: any[]): any[] {
  const indexes: any[] = [];
  for (let i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
