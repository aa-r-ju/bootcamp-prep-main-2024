let boolean1 = true,
  boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW
if (boolean1 && boolean2) {
  result = "both";
} else if (boolean1 || boolean2) {
  result = "one";
} else {
  result = "none";
}
