// YOUR CODE BELOW
function taxCalculator(price, state) {
  let total = 0;
  if (state === "NY") {
    total = price + price * 0.04;
  } else if (state === "NJ") {
    total = price + price * 0.06625;
  }
  return total;
}
console.log(taxCalculator(100, "NY"));
console.log(taxCalculator(100, "NJ"));

// ANOTHER TECHNIQ
function taxCalculator(price, state) {
  let taxRate;
  if (state === "NY") {
    taxRate = 0.04;
  } else if (state === "NJ") {
    taxRate = 0.06625;
  }
  return price + price * taxRate;
}
console.log(taxCalculator(100, "NY"));
console.log(taxCalculator(100, "NJ"));
