// YOUR CODE BELOW
function mySlice(originalArray, startIdx = 0, endIdx = originalArray.length) {
  let arr = [];

  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }

  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  for (let i = startIdx; i < endIdx; i++) {
    arr.push(originalArray[i]);
  }
  return arr;
}
console.log(mySlice([1, 2, 3], 1, 2));
// console.log(mySlice([1, 2, 3], 1));
// console.log(mySlice([1, 2, 3]));
console.log(mySlice([1, 2, 3], -1));
