/* Transpose means is to interchange rows and columns of a two-dimensional array matrix.

[AT]ij=[A]ji

ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:

Example :

[
 [1,2,3],
 [4,5,6]
].transpose() //should return 
[
 [1,4],
 [2,5],
 [3,6]
]
Write a prototype transpose to array in JS or add a .transpose method in Ruby or create a transpose function in Python so that any matrix of order ixj 2-D array returns transposed Matrix of jxi . */

Array.prototype.transpose = function () {
  const numOfRows = this.length;
  const numOfCols = this[0].length;
  const result = [];

  for (let col = 0; col < numOfCols; col++) {
    result[col] = [];
    for (let row = 0; row < numOfRows; row++) {
      result[col][row] = this[row][col];
    }
  }
  return result;
};

console.log(
  [
    [1, 2, 3],
    [4, 5, 6],
  ].transpose()
);
