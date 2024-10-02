const $message = document.querySelector('.message');

if (!$message) throw new Error('$message query failed.');

setTimeout(function timeout() {
  $message!.textContent = 'Hello There';
}, 2000);
