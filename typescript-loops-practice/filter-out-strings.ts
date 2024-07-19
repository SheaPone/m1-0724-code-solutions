/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const noStrings: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      delete values[i];
    } else {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
