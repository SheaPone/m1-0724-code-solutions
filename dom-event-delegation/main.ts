const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('$taskList does not exist');

function removal(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('event.target:', eventTarget);
  console.log('event.target.TagName:', eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const taskListItem = eventTarget.closest('.task-list-item');
    console.log('taskListItem', taskListItem);
    taskListItem?.remove();
  }
}

$taskList.addEventListener('click', removal);
