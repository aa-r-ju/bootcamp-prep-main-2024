// YOUR CODE BELOW
function doYouPlayTheTheremin(value) {
  let val;
  if (value[0] === "s" || value[0] === "S") {
    val = true;
  } else {
    val = false;
  }
  return val;
}
console.log(doYouPlayTheTheremin("Griffin"));
console.log(doYouPlayTheTheremin("Scott"));

console.log(doYouPlayTheTheremin("sila"));
