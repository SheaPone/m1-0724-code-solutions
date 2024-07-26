/* exported ransomCase */
function ransomCase(str: string): string {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newString = newString + str[i].toLowerCase();
    } else {
      newString = newString + str[i].toUpperCase();
    }
  }
  return newString;
}
