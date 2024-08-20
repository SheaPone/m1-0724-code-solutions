const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickButton does not exist');

function handleClick(event: Event): any {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$clickButton.addEventListener('click', handleClick);

const $mouseover = document.querySelector('.hover-button');
if (!$mouseover) throw new Error('$mouseOver does not exist');

function handleMouseover(event: Event): any {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$mouseover.addEventListener('mouseover', handleMouseover);

const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('$doubleClickButton does not exist');

function handleDoubleClick(event: Event): any {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
