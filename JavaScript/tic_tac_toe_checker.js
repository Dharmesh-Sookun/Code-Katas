/* 
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

 */

function checkWinner(section) {
  if (section[0] == 1 && section[1] == 1 && section[2] == 1) {
    return 1;
  } else if (section[0] == 2 && section[1] == 2 && section[2] == 2) {
    return 2;
  }
}

function isSolved(board) {
  //Checking for row
  for (let row = 0; row < 3; row++) {
    let row_vals = [];
    for (let col = 0; col < 3; col++) {
      const currentVal = board[row][col];
      row_vals.push(currentVal);
    }
    if (checkWinner(row_vals)) return checkWinner(row_vals);
  }

  //Checking column
  for (let row = 0; row < 3; row++) {
    let col_vals = [];
    for (let col = 0; col < 3; col++) {
      const currentVal = board[col][row];
      col_vals.push(currentVal);
    }
    if (checkWinner(col_vals)) return checkWinner(col_vals);
  }

  //Checking first diagonal
  let diag_val = [];
  for (let index = 0; index < 3; index++) {
    const currentVal = board[index][index];
    diag_val.push(currentVal);
  }

  if (checkWinner(diag_val)) {
    return checkWinner(diag_val);
  }

  //Checking second diagonal
  diag_val = [board[0][2], board[1][1], board[2][0]];

  if (checkWinner(diag_val)) {
    return checkWinner(diag_val);
  }

  //checking for empty spots
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const currentVal = board[row][col];
      if (currentVal == 0) {
        return -1;
      }
    }
  }

  return 0;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ]),
  -1
);
