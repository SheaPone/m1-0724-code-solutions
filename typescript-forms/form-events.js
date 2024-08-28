'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  let eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  let eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  let eventTarget = event.target;
  console.log(eventTarget.name, eventTarget.value);
}
const formElements = document.querySelector('#contact-form');
if (!formElements) throw new Error('$formElements query failed');
const $userName = formElements['user-name'];
const $userEmail = formElements['user-email'];
const $userMessage = formElements['user-message'];
if (!$userName || !$userEmail || !$userMessage)
  throw new Error('$userName, $userEmail, or $userMessage query failed');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
