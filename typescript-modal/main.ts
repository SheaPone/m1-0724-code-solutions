const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal) throw new Error('$openModal does not exist');
if (!$dismissModal) throw new Error('$dismissModal does not exist');
if (!$dialog) throw new Error('$dialog does not exist');

function openModal(): void {
  $dialog?.showModal();
}

$openModal.addEventListener('click', openModal);

function closeModal(): void {
  $dialog?.close();
}

$dismissModal.addEventListener('click', closeModal);
