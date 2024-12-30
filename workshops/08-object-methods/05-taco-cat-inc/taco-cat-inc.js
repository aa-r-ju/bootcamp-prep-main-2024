// let tacoCatInc = {
//   gourmetShell: {
//     'hard treat shell': {cost: 2, quantity: 100},
//     'soft treat shell': {cost: 1.5, quantity: 100}
//   },

//   gourmetFishFilling: {
//     'salmon': {cost: 5, quantity: 100},
//     'tuna': {cost: 5.5, quantity: 100},
//     'sardines': {cost: 1.5, quantity: 100}
//   },

//   gourmetVeggie: {
//     'cat grass': {cost: 1, quantity: 100}
//   },

//   gourmetSeasoning: {
//     'cat nip': {cost: 0.5, quantity: 100},
//     'treat dust': {cost: 0.1, quantity: 100}
//   },

//   cash: 0
// };

// YOUR CODE BELOW

let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,

  currentInventory: function () {
    let totalAmount = 0;
    for (let category in tacoCatInc) {
      if (typeof this[category] === "object" && category !== "cash") {
        for (let item in this[category]) {
          totalAmount +=
            this[category][item].cost * this[category][item].quantity;
        }
      }
    }
    return totalAmount;
  },
  sale: function (para) {
    let sum = 0;
    for (let category in para) {
      let itemName = para[category];
      let item = this[category][itemName];
      console.log(item.quantity, "test");
      if (item && item.quantity > 0) {
        sum += item.cost;
        item.quantity -= 1;
      } else {
        console.log(`Insufficient inventory for ${itemName} in ${category}.`);
      }
    }
    this.cash += sum;
    return sum;
  },
};
console.log(tacoCatInc.currentInventory());

tacoCatInc.sale(order); // => 7
// console.log(tacoCatInc.sale(order));
console.log(tacoCatInc.gourmetFishFilling.salmon.quantity);
console.log(tacoCatInc.cash);
console.log(tacoCatInc.currentInventory());
