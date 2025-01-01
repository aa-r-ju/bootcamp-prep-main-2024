// YOUR CODE BELOW
function myForEach(arr, callback) {
  return arr.forEach(callback);
}
let sum = 0;

function addToSum(num) {
  sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6
