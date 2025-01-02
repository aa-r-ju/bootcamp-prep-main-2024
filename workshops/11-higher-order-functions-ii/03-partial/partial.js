// YOUR CODE BELOW
function partial(callback, arg) {
  return function (arg1) {
    return callback(arg, arg1);
  };
}

function summer(a, b) {
  return a + b;
}

let sumFive = partial(summer, 5);
console.log(sumFive(10));
