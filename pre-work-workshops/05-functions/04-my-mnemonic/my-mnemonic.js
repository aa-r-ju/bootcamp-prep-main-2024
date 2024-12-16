// YOUR CODE BELOW
function myMnemonic(...args) {
  let value = "";
  for (let i = 0; i < args.length; i++) {
    value += args[i][0];
  }
  return value;
}
console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness"));
console.log(myMnemonic("We", "Eat", "Eggs"));
console.log(myMnemonic("friday", "rat", "ink", "ear", "nest", "dish", "snake"));
