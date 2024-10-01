'use strict';
function getRangeReport(start, end) {
  let total = 0;
  let odds = [];
  let evens = [];
  let range = [];
  for (let i = start; i <= end; i++) {
    total += i;
    range.push(i);
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  let average = total / range.length;
  const rangeReport = {
    total: total,
    odds: odds,
    evens: evens,
    range: range,
    average: average,
  };
  return rangeReport;
}
console.log(getRangeReport(1, 10));
