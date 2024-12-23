// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  let arr = [];

  if (rotateNum === 0) {
    return [...originalArray];
  }

  if (rotateNum > 0) {
    let cutIndex = originalArray.length - rotateNum;
    arr = originalArray
      .slice(cutIndex)
      .concat(originalArray.slice(0, cutIndex));
  } else {
    let cutIndex = -rotateNum;
    arr = originalArray
      .slice(cutIndex)
      .concat(originalArray.slice(0, cutIndex));
  }

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], -1));
console.log(rotateArray([1, 2, 3, 4, 5], 0));
