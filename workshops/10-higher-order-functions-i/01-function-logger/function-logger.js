// YOUR CODE BELOW
function functionLogger(func, arg) {
  console.log("Function starting");

  let result = func(arg);

  console.log("Function complete");
  return result;
}
function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
console.log(squareOfFour);
