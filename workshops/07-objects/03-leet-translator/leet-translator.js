let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW

function leetTranslator(value) {
  let leetCodex = {};

  for (let i = 0; i < letters.length; i++) {
    leetCodex[letters[i]] = leetChars[i];
  }

  let result = "";

  for (let val of value.toLowerCase()) {
    result += leetCodex[val];
  }
  return result;
}
console.log(leetTranslator("Fullstack"));
console.log(leetTranslator("Aarju"));
