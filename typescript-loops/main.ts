/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: any[] = [];
  let currentNumber = 0;
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: any[] = [];
  let currentNumber = 0;
  while (currentNumber < 20) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word: any, times: any): any {
  let count = 0;
  let repeated = '';
  while (count < times) {
    count++;
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(str: any): any {
  for (let i: any = 0; i < str.length; i++) console.log(str[i]);
}

function doubleAll(numbers: number[]): any[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }
  return doubled;
}

function getKeys(obj: Record<string, unknown>): any[] {
  const keys: any[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj: Record<string, unknown>): any[] {
  const values: any[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
