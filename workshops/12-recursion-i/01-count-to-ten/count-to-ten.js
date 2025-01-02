// YOUR CODE BELOW
function countToTen(n) {
  if (n > 10) return;
  console.log(n);
  countToTen(n + 1);
}
countToTen(1);
