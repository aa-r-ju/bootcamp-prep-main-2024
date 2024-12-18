// YOUR CODE BELOW
function onlyOne(arg1, arg2, arg3) {
  let truthyCount = (arg1 ? 1 : 0) + (arg2 ? 1 : 0) + (arg3 ? 1 : 0);

  return truthyCount === 1;
}
console.log(onlyOne(false, false, true));
console.log(onlyOne(onlyOne(0, 1, 2)));
