// // YOUR CODE BELOW
function getDogBreeder(defaultName, defaultAge) {
  return function (name, age) {
    if (typeof name === "number") {
      age = name;
      name = defaultName;
    }

    if (typeof name === "undefined") {
      name = defaultName;
    }

    if (typeof age === "undefined") {
      age = defaultAge;
    }

    return { name, age };
  };
}

let puppyFarm = getDogBreeder("Snoopy", 0);
let rescueShelter = getDogBreeder("Odie", 3);

console.log(puppyFarm("Olaf", 3));

console.log(puppyFarm(2));

console.log(rescueShelter());

console.log(rescueShelter(10));
