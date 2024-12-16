// YOUR CODE BELOW
function lastCharacter(arg1, arg2) {
  if (arg1[arg1.length - 1] === arg2[arg2.length - 1]) {
    return true;
  } else {
    return false;
  }
}

console.log(lastCharacter("apples", "pumkins"));
console.log(lastCharacter("marker", "pen"));
