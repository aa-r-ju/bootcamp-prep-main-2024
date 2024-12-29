// YOUR CODE BELOW

let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

function callThemAll(obj, value) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "function") {
      result.push(obj[key](value));
    }
  }
  return result;
}

console.log(callThemAll(addsNums, 100));
