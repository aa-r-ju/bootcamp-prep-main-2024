// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
  let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++) {
    let newRow = originalGrid[i].slice(0, originalGrid[i].length - numColumns);
    newGrid.push(newRow);
  }

  return newGrid;
}

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);
