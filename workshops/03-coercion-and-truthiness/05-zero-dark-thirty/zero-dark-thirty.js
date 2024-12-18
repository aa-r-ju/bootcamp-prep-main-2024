// YOUR CODE BELOW
function zeroDarkThirty(para) {
  if (para === 0) {
    return NaN;
  }

  let str = String(para);
  let newval = "";
  console.log(newval, "kk");

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      newval += str[i];
    }
  }

  return newval === "" ? NaN : Number(newval);
}

console.log(zeroDarkThirty(102302));
console.log(zeroDarkThirty(606.203));
