let counter = 0;

// YOUR CODE BELOW
function incrementalChange(number) {
  return (counter += number);
}

console.log(incrementalChange(2));
console.log(incrementalChange(6));
console.log(incrementalChange(-1));
