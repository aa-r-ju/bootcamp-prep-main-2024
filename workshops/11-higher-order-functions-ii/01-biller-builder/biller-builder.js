// YOUR CODE BELOW
function billerBuilder(state) {
  return function billi(price) {
    let paisa = price;
    if (state === "NY") {
      paisa += paisa * 0.03;
      paisa += paisa * 0.04;
    } else if (state === "NJ") {
      paisa += paisa * 0.05;
      paisa += paisa * 0.06625;
    }

    return paisa;
  };
}

let newYorkBiller = billerBuilder("NY");
console.log(newYorkBiller(100));
let newJersBiller = billerBuilder("NJ");
console.log(newJersBiller(100));
