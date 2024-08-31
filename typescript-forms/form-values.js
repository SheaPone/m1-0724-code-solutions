'use strict';
const formElementsValues = document.querySelector('#contact-form');
if (!formElementsValues) throw new Error('formElementsVales query failed');
formElementsValues.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = formElementsValues.elements;
  const formElementsObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formElementsObject);
  formElementsValues.reset();
});
