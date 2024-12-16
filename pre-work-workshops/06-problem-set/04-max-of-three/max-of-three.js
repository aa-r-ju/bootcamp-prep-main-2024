// YOUR CODE BELOW
function maxOfThree(val1, val2, val3) {
  let max = val1;
  if (val2 > max) {
    max = val2;
  }
  if (val3 > max) {
    max = val3;
  }
  return max;
}
console.log(maxOfThree(5, 4, 10));
console.log(maxOfThree(7, 7, 4));
console.log(maxOfThree(10, 20, 100));
