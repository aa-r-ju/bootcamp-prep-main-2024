// // YOUR CODE BELOW
// function isTruthy(para) {
//   if (para === null) {
//     return `The null value is falsey`;
//   } else if (para === false) {
//     return `The boolean value false is falsey`;
//   } else if (para === undefined) {
//     return `undefined is falsey`;
//   } else if (para === 0) {
//     return `The number 0 is falsey (the only falsey number)`;
//   } else if (para === "") {
//     return `The empty string is falsey (the only falsey string)`;
//   } else {
//     return true;
//   }
// }
// console.log(isTruthy("I yearn for truth"));
// console.log(isTruthy(null));
// console.log(isTruthy(undefined));
// console.log(isTruthy(0));
// console.log(isTruthy(""));
// console.log(isTruthy(false));

// ANOTHER TECHNIQ

function isTruthy(para) {
  switch (para) {
    case null:
      return `The null value is falsey`;
    case false:
      return `The boolean value false is falsey`;
    case undefined:
      return `undefined is falsey`;
    case 0:
      return `The number 0 is falsey (the only falsey number)`;
    case "":
      return `The empty string is falsey (the only falsey string)`;

    default:
      return true;
  }
}

console.log(isTruthy("I yearn for truth"));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(""));
console.log(isTruthy(false));
