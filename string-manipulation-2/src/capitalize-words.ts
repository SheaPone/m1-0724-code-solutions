/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let newString = '';
  const wordsArr: string[] = string.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    newString += capitalizeWord(wordsArr[i]) + ' ';
  }
  return newString.trim();
}
