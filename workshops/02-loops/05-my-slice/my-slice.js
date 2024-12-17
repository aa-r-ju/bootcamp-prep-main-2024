// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
  let newVal = "";

  for (let i = startIdx; i < endIdx; i++) {
    newVal += originalString[i];
  }

  return newVal;
}
console.log(mySlice("slice and dice"));
console.log(mySlice("slice and dice", 2));
console.log(mySlice("slice and dice", 2, 5));
