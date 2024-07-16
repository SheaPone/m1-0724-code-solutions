interface Person {
  firstName: string;
  lastName: string;
}

function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
const convertMinutesToSecondsResults: number = convertMinutesToSeconds(10);
console.log('convertMinutesToSeconds:', convertMinutesToSecondsResults);

function greet(name: string): string {
  return 'Hey' + ' ' + name;
}
const greetResults: string = greet('Shea!');
console.log('greet:', greetResults);

const getArea = (width: number, height: number): number => {
  return width * height;
};
const getAreaResults: number = getArea(12, 7);
console.log('getArea:', getAreaResults);

const getFirstName = (person: Person): string => {
  return person.firstName;
};
const getFirstNameResults: string = getFirstName({
  firstName: 'Shea',
  lastName: 'Pone',
});
console.log('getFirstName:', getFirstNameResults);

const getLastElement = (array: any[]): any => {
  return array[array.length - 1];
};
const getLastElementResults: any = getLastElement(['hi', 'hello', 'hey']);
console.log('getLastElements:', getLastElementResults);

function callOtherFunction(otherFunction: Function, params: any): any {
  return otherFunction(params);
}
const callOtherFunctionResults: any = callOtherFunction(
  convertMinutesToSeconds,
  12
);
console.log('callOtherFunction:', callOtherFunctionResults);
