// YOUR CODE BELOW
function frequencyAnalysis(alpha) {
  let obj = {};
  for (let val of alpha) {
    if (obj[val]) {
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  }
  return obj;
}

console.log(frequencyAnalysis("abacdefagaaaaaaaa"));
