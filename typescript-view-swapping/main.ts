const $tabContainer = document.querySelector('.tab-container') as HTMLElement;
const $tab = document.querySelectorAll('.tab') as NodeList;
const $view = document.querySelectorAll('.view') as NodeList;

if (!$tabContainer || !$tab || !$view)
  throw new Error('!$tabContainer,!$tab, or !$view query failed');

function tabChanger(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      const tab = $tab[i] as HTMLDivElement;
      if ($eventTarget === tab) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    const eventTargetData = $eventTarget.dataset.view;
    for (let i = 0; i < $view.length; i++) {
      const view = $view[i] as HTMLElement;
      if (view.getAttribute('data-view') === eventTargetData) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', tabChanger);
