// YOUR CODE BELOW
function sumNums(num) {
  if (num <= 1) return num;
  console.log(num - 1);
  return num + sumNums(num - 1);
}

sumNums(3); // => 6 (3 + 2 + 1)
