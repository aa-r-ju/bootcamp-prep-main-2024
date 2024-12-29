// YOUR CODE BELOW
// function dogBreeder(name = "Steve", age = 0) {
//   if (name === String && age === Number) {
//     return { name, age };
//   }
// }
// console.log(dogBreeder("Sam", 2));
// console.log(dogBreeder(12));

function dogBreeder(name, age) {
  // If only one argument is provided and it's a number, it should be the age
  if (typeof name === "number") {
    age = name; // Set age to the provided number
    name = "Steve"; // Default name
  }

  // If no name is provided, default to 'Steve'
  if (typeof name === "undefined") {
    name = "Steve";
  }

  // If no age is provided, default to 0
  if (typeof age === "undefined") {
    age = 0;
  }

  return { name, age };
}

// Example Usage
console.log(dogBreeder("Sam", 12)); // => { name: 'Sam', age: 12 }
console.log(dogBreeder(15)); // => { name: 'Steve', age: 15 }
console.log(dogBreeder()); // => { name: 'Steve', age: 0 }
