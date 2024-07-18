'use strict';
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('isUnderFive:', isUnderFive(10));
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isEven:', isEven(8));
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('startsWithJ:', startsWithJ('Shea'));
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const shea = {
  name: 'Shea Lindsay Pone',
  age: 27,
};
console.log('isOldEnoughToDrink:', isOldEnoughToDrink(shea));
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrive:', isOldEnoughToDrive(shea));
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
}
console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(shea));
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('catgeorizeAcidity:', categorizeAcidity(6));
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm Cute~";
    default:
      return 'Goodnight Everybody!';
  }
}
console.log('introduceWarnerBro:', introduceWarnerBro('dot'));
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Saw';
    case 'drama':
      return 'Romeo and Juliet';
    case 'musical':
      return 'Mamma Mia';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('recommendedMovie:', recommendMovie('horror'));
