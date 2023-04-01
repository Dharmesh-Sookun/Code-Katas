/* Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is

| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive. */

function transpose(matrix) {
  const result = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const intermediate = [];
    for (let row = 0; row < matrix.length; row++) {
      intermediate.push(matrix[row][col]);
    }
    result.push(intermediate);
  }
  return result;
}

console.log(transpose([[1]]), [[1]]);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
  [
    [1, 4],
    [2, 5],
    [3, 6],
  ]
);
