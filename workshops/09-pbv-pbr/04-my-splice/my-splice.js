// YOUR CODE BELOW
// function mySplice(arr, start, deleteCount, newElement) {
//   let removedElements = [];

//   for (let i = start; i < start + deleteCount; i++) {
//     removedElements.push(arr[i]);
//   }

//   let resultArray = [];
//   for (let i = 0; i < start; i++) {
//     resultArray.push(arr[i]);
//   }
//   if (newElement !== undefined) {
//     resultArray.push(newElement);
//   }
//   for (let i = start + deleteCount; i < arr.length; i++) {
//     resultArray.push(arr[i]);
//   }

//   for (let i = 0; i < resultArray.length; i++) {
//     arr[i] = resultArray[i];
//   }
//   arr.length = resultArray.length;

//   return removedElements;
// }

// let myArray = [1, 2, 3];
// let removedItems = mySplice(myArray, 1, 1, "apples");

// console.log(removedItems); // [2]
// console.log(myArray); // [1, 'apples', 3]

function mySplice(arr, start, end, value) {
  let reverseArray = [];

  for (let i = start; i < start + end; i++) {
    reverseArray.push(arr[i]);
  }

  let resultArray = [];
  for (let i = 0; i < start; i++) {
    resultArray.push(arr[i]);
  }
  if (value !== undefined) {
    resultArray.push(value);
  }

  for (let i = start + end; i < arr.length; i++) {
    resultArray.push(arr[i]);
  }

  for (let i = 0; i < resultArray.length; i++) {
    arr[i] = resultArray[i];
  }
  arr.length = resultArray.length;
  console.log(reverseArray);
  return reverseArray;
}

let myArray = [1, 2, 3];

let removedItems = mySplice(myArray, 1, 1, "apples");
console.log(removedItems);
