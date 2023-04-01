/* Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:


There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:


There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions


A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:


For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/ */

function doneOrNot(board) {
  // Checking if any cell is empty
  for (let row = 0; row < board.length; row++) {
    const currentRow = board[row];
    for (let col = 0; col < currentRow.length; col++) {
      if (currentRow[col] == 0) return "Try again!";
    }
  }

  //Checking if every row contains numbers 1-9 at most once
  let rowSet = {};
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (rowSet[board[row][col]]) return "Try again!";
      rowSet[board[row][col]] = true;
    }
    rowSet = {};
  }

  //Checking if every column contains numbers 1-9 at most once
  let colSet = {};
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[col].length; row++) {
      if (colSet[board[row][col]]) return "Try again!";
      colSet[board[row][col]] = true;
    }
    colSet = {};
  }

  //Checking if every box contains numbers 1-9 at most once
  const boxes = getBoxes(board);
  let boxSet = {};
  for (let row = 0; row < boxes.length; row++) {
    for (let col = 0; col < boxes[row].length; col++) {
      if (boxSet[boxes[row][col]]) return "Try again!";
      boxSet[boxes[row][col]] = true;
    }
    boxSet = {};
  }

  return "Finished!";
}

function getBoxes(board) {
  const boxes = [];
  for (let i = 0; i < 81; i++) {
    const row = Math.floor(i / 9);
    const col = i % 9;
    let box = [];
    if (row < 3) {
      if (col < 3) {
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            box.push(board[j][k]);
          }
        }
      } else if (col < 6) {
        for (let j = 0; j < 3; j++) {
          for (let k = 3; k < 6; k++) {
            box.push(board[j][k]);
          }
        }
      } else {
        for (let j = 0; j < 3; j++) {
          for (let k = 6; k < 9; k++) {
            box.push(board[j][k]);
          }
        }
      }
    } else if (row < 6) {
      if (col < 3) {
        for (let j = 3; j < 6; j++) {
          for (let k = 0; k < 3; k++) {
            box.push(board[j][k]);
          }
        }
      } else if (col < 6) {
        for (let j = 3; j < 6; j++) {
          for (let k = 3; k < 6; k++) {
            box.push(board[j][k]);
          }
        }
      } else {
        for (let j = 3; j < 6; j++) {
          for (let k = 6; k < 9; k++) {
            box.push(board[j][k]);
          }
        }
      }
    } else {
      if (col < 3) {
        for (let j = 6; j < 9; j++) {
          for (let k = 0; k < 3; k++) {
            box.push(board[j][k]);
          }
        }
      } else if (col < 6) {
        for (let j = 6; j < 9; j++) {
          for (let k = 3; k < 6; k++) {
            box.push(board[j][k]);
          }
        }
      } else {
        for (let j = 6; j < 9; j++) {
          for (let k = 6; k < 9; k++) {
            box.push(board[j][k]);
          }
        }
      }
    }
    boxes.push(box);
  }
  return boxes;
}

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]),
  "Finished!"
);

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ]),
  "Try again!"
);

console.log(
  doneOrNot([
    [1, 3, 2, 5, 7, 9, 4, 6, 8],
    [4, 9, 8, 2, 6, 1, 3, 7, 5],
    [7, 5, 6, 3, 8, 4, 2, 1, 9],
    [6, 4, 3, 1, 5, 8, 7, 9, 2],
    [5, 2, 1, 7, 9, 3, 8, 4, 6],
    [9, 8, 7, 4, 2, 6, 5, 3, 1],
    [2, 1, 4, 9, 3, 5, 6, 8, 7],
    [3, 6, 5, 8, 1, 7, 9, 2, 4],
    [8, 7, 9, 6, 4, 2, 1, 3, 5],
  ]),
  "Try again!"
);
