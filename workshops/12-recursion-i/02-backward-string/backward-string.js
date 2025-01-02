// YOUR CODE BELOW
function backwardString(str) {
  if (str === "") return;
  console.log(str[str.length - 1]);
  backwardString(str.slice(0, -1));
}
backwardString("happy");
