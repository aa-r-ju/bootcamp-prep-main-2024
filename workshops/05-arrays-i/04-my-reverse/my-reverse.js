// YOUR CODE BELOW
function myReverse(arr) {
  let startIndex = arr.length - 1;
  let newArr = [];

  for (let i = startIndex; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(myReverse([1, 2, 3]));
