// YOUR CODE BELOW
function whosASpecial(arr) {
  let result = "";
  arr.forEach((element, index) => {
    result += `${element.name} the ${element.species} is very special!`;

    if (index < arr.length - 1) {
      result += " ";
    }
  });
  return result;
}

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
