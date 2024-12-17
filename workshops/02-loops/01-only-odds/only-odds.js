// YOUR CODE BELOW

function onlyOdds(oddnum) {
  let sum = 0;

  if (oddnum < 1) {
    return sum;
  }

  if (oddnum >= 1) {
    for (let i = 1; i <= oddnum; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  }
  return sum;
}
console.log(onlyOdds(6));
console.log(onlyOdds(15));
console.log(onlyOdds(3));
