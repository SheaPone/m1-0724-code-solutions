'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('EvenNumbers:', evenNumbers);
let noD = names.filter((word) => !word.includes('d') && !word.includes('D'));
console.log(noD);
