// YOUR CODE BELOW
//  ticTacToe = {
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
//   move: function (char, rowNum, colNum) {
//     if (this.board[rowNum][colNum] === null) {
//       this.board[rowNum][colNum] = char;
//       console.log(this.board, "checking");
//       return this.board;
//     } else {
//       console.log("Cell is already occupied!");
//       return this.board;
//     }
//   },
//   clear: function () {
//     this.board = [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null],
//     ];
//     console.log("Board cleared!");
//     console.log(this.board, "making");
//     return this.board;
//   },
// };

// ticTacToe.move("X", 0, 0); // Place 'X' in the top-left corner
// // ticTacToe.move("O", 1, 1); // Place 'O' in the center
// ticTacToe.move("X", 0, 0); // Attempt to place 'X' in an occupied cell
// // ticTacToe.clear(); // Reset the board

let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (char, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = char;
      return this.board;
    } else {
      console.log("Cell is already occupied");
      return this.board;
    }
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log("Board cleared");
    console.log(this.board);
    return this.board;
  },
};

console.log(ticTacToe.move("X", 0, 0));
console.log(ticTacToe.move("X", 1, 1));
console.log(ticTacToe.move("X", 2, 1));
console.log(ticTacToe.clear());
