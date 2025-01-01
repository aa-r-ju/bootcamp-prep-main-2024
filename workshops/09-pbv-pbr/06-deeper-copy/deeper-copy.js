// YOUR CODE BELOW
function deeperCopy(value) {
  let copy = [];
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      copy.push(deeperCopy(value[i]));
    } else {
      copy.push(value[i]);
    }
  }
  return copy;
}
