'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if (!$tabContainer || !$tab || !$view)
  throw new Error('!$tabContainer,!$tab, or !$view query failed');
function tabChanger(event) {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      let tab = $tab[i];
      if ($eventTarget === tab) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    const eventTargetData = $eventTarget.dataset.view;
    for (let i = 0; i < $view.length; i++) {
      let view = $view[i];
      if (view.getAttribute('data-view') === eventTargetData) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    }
  }
}
$tabContainer.addEventListener('click', tabChanger);
