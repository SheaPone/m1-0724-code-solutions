/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: any): any[] {
  const suffixArray: any[] = [];
  for (let i = 0; i < words.length; i++) {
    suffixArray.push(words[i] + suffix);
  }
  return suffixArray;
}
