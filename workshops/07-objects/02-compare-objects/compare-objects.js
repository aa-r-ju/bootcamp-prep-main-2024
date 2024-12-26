// YOUR CODE BELOW

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  console.log(keys1, "test");
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(compareObjects({ name: "nick" }, { name: "nick" }));
// console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }));
