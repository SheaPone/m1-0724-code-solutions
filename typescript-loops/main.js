'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 0;
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 0;
  while (currentNumber < 20) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  let count = 0;
  let repeated = '';
  while (count < times) {
    count++;
    repeated += word;
  }
  return repeated;
}
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) console.log(str[i]);
}
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    let doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }
  return doubled;
}
function getKeys(obj) {
  let keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
function getValues(obj) {
  let values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
