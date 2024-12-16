// YOUR CODE BELOW
function defaultGreet(fname, lname = "Doe") {
  let greet = "Hi " + fname + " " + lname + "!";
  return greet;
}
console.log(defaultGreet("Chaka", "Khan"));
console.log(defaultGreet("John"));
