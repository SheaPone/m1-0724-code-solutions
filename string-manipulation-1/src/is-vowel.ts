/* exported isVowel */
function isVowel(char: string): any {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowel.length; i++) {
    if (char.toLowerCase() === vowel[i]) {
      return true;
    }
  }
  return false;
}
