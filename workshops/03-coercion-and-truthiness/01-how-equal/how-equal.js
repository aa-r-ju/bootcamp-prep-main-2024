// YOUR CODE BELOW
function howEqual(val1, val2) {
  if (val1 === val2) {
    return "strictly";
  } else if (val1 == val2) {
    return "loosely";
  } else {
    return "not equal";
  }
}

console.log(howEqual(0, "0"));
console.log(howEqual(3, 9 / 3));
console.log(howEqual(true, "truthy"));
