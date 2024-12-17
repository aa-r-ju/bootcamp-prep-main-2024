// YOUR CODE BELOW
function exponentiate(base, power) {
  let root = 1;
  for (let i = 0; i < power; i++) {
    root *= base;
  }
  return root;
}
console.log(exponentiate(2, 2));
console.log(exponentiate(5, 2));
console.log(exponentiate(3, 4));
