// YOUR CODE BELOW
function oddCouple(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
    if (newArr.length === 2) {
      return newArr;
    }
  }
  return newArr;
}

console.log(oddCouple([1, 2, 3, 4, 5]));
