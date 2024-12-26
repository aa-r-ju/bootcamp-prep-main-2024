// YOUR CODE BELOW
function lastFridayNight(arr) {
  let total = 0;
  // in regular or simple way
  //   for (let i = 0; i < arr.length; i++) {
  //     total += arr[i].amount;
  //   }

  // in object's way or new way according to object
  for (let key in arr) {
    console.log(arr[key], "aarju");
    total += arr[key].amount;
  }
  return total;
}

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

console.log(lastFridayNight(transactions));
