interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const formElementsValues = document.querySelector(
  '#contact-form'
) as HTMLFormElement;

if (!formElementsValues) throw new Error('formElementsVales query failed');

formElementsValues.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = formElementsValues.elements as FormElements;
  const formElementsObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formElementsObject);

  formElementsValues.reset();
});
