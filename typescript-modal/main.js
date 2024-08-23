'use strict';
let $openModal = document.querySelector('.open-modal');
let $dismissModal = document.querySelector('.dismiss-modal');
let $dialog = document.querySelector('dialog');
if (!$openModal) throw new Error('$openModal does not exist');
if (!$dismissModal) throw new Error('$dismissModal does not exist');
if (!$dialog) throw new Error('$dialog does not exist');
function openModal() {
  $dialog?.showModal();
}
$openModal.addEventListener('click', openModal);
function closeModal() {
  $dialog?.close();
}
$dismissModal.addEventListener('click', closeModal);
