// YOUR CODE BELOW
//USING OPERATORS;
// function myOr(par1, par2, par3) {
//   return par1 || par2 || par3;
// }
// myOr();

// function myAnd(arg1, arg2, arg3) {
//   return arg1 && arg2 && arg3;
// }

//WITHOUT USING OPERATORS;

function myOr(arg1, arg2, arg3) {
  if (arg1) return arg1;
  if (arg2) return arg2;
  return arg3;
}

function myAnd(arg1, arg2, arg3) {
  if (!arg1) return arg1;
  if (!arg2) return arg2;
  return arg3;
}
