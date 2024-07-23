/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const noNull: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) {
      delete values[i];
    } else {
      noNull.push(values[i]);
    }
  }
  return noNull;
}
