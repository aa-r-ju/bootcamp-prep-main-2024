// YOUR CODE BELOW
function evenAndOdd(arr) {
  let bigArr = [];
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  bigArr.push(even);
  bigArr.push(odd);
  return bigArr;
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
