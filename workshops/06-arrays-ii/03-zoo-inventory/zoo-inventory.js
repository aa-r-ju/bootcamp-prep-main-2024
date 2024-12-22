// // YOUR CODE BELOW
function zooInventory(zoo) {
  let all = [];
  for (let i = 0; i < zoo.length; i++) {
    let animalName = zoo[i][0];
    let animalDetails = zoo[i][1];
    let animalType = animalDetails[0];
    let animalAge = animalDetails[1];

    let sentence = `${animalName} the ${animalType} is ${animalAge}.`;
    all.push(sentence);
  }
  console.log(all);
  return all;
}
let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];

zooInventory(myZoo);
