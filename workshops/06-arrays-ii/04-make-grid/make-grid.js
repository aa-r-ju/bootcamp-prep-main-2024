// // YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
  let grid = [];

  for (let i = 0; i < numRows; i++) {
    // console.log(i);
    let row = [];
    for (let j = 1; j <= numColumns; j++) {
      //   console.log(j);
      row.push(j);
      console.log(row);
    }
    grid.push(row);
  }

  return grid;
}

console.log(makeGrid(3, 4));
/* => [[1, 2, 3],
         [1, 2, 3],
         [1, 2, 3],
         [1, 2, 3]]
  */
