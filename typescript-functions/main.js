'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResults = convertMinutesToSeconds(10);
console.log('convertMinutesToSeconds:', convertMinutesToSecondsResults);
function greet(name) {
  return 'Hey' + ' ' + name;
}
const greetResults = greet('Shea!');
console.log('greet:', greetResults);
const getArea = (width, height) => {
  return width * height;
};
const getAreaResults = getArea(12, 7);
console.log('getArea:', getAreaResults);
const getFirstName = (person) => {
  return person.firstName;
};
const getFirstNameResults = getFirstName({
  firstName: 'Shea',
  lastName: 'Pone',
});
console.log('getFirstName:', getFirstNameResults);
const getLastElement = (array) => {
  return array[array.length - 1];
};
const getLastElementResults = getLastElement(['hi', 'hello', 'hey']);
console.log('getLastElements:', getLastElementResults);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResults = callOtherFunction(convertMinutesToSeconds, 12);
console.log('callOtherFunction:', callOtherFunctionResults);
