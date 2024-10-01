'use strict';
let $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay query failed');
let count = 4;
const intervalId = setInterval(function interval() {
  count--;
  $countdownDisplay.textContent = `${count}`;
  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
