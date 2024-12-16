// YOUR CODE BELOW
function everyWhichWay(num1, num2, num3) {
  if (num1 + num2 === num3) {
    return "sum";
  } else if (num1 - num2 === num3) {
    return "difference";
  } else if (num1 * num2 === num3) {
    return "product";
  } else if (num1 / num2 === num3) {
    value = "fraction";
  } else {
    return null;
  }
  return value;
}

console.log(everyWhichWay(10, 20, 30));
console.log(everyWhichWay(50, 20, 30));
console.log(everyWhichWay(4, 4, 16));
console.log(everyWhichWay(100, 10, 10));
console.log(everyWhichWay(1, 1000, 50));
