// YOUR CODE BELOW
function timesTable(num) {
  return function (num1) {
    let total = 0;
    total += num * num1;
    return total;
  };
}

let ninesTable = timesTable(9);
console.log(ninesTable(8));
let twelvesTable = timesTable(12);
console.log(twelvesTable(100));
