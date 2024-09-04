'use strict';
const $span = document.querySelectorAll('span');
if (!$span) throw new Error('$span query failed');
let currentIndex = 0;
console.log($span);
function typingTest(event) {
  let span = $span[currentIndex];
  if (event.key === span.textContent) {
    span.className = 'correct';
    currentIndex++;
  } else if (event.key !== span.textContent) {
    span.className = 'wrong';
  } else {
    span.className = 'letter';
  }
}
document.body.addEventListener('keydown', typingTest);
