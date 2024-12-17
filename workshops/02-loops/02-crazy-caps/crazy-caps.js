// YOUR CODE BELOW

function crazyCaps(string) {
  let capitalized = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      capitalized += string[i].toLowerCase();
    } else {
      capitalized += string[i].toUpperCase();
    }
  }
  return capitalized;
}

console.log(crazyCaps("tej is amazing"));
console.log(crazyCaps("hello sila"));
console.log(crazyCaps("how are you?"));
