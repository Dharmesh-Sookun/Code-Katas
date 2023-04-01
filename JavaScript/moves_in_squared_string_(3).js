/* You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)
diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)
rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.
s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
or printed for the last:
selfie_and_diag1
abcd|aeim
efgh|bfjn
ijkl|cgko 
mnop|dhlp
Task:
Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)
Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
Notes:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Bash Note: The output strings should be separated by \r instead of \n. See "Sample Tests". */

function rot90Clock(grid) {
  let resultStr = "";
  for (let col = 0; col < grid.length; col++) {
    for (let row = grid.length - 1; row >= 0; row--) {
      resultStr += grid[row][col];
    }
    col != grid.length - 1 ? (resultStr += "\n") : (resultStr += "");
  }
  return resultStr;
}
function diag1Sym(grid) {
  let resultStr = "";
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      resultStr += grid[col][row];
    }
    row != grid.length - 1 ? (resultStr += "\n") : (resultStr += "");
  }
  return resultStr;
}

function selfieAndDiag1(grid) {
  const diag1Grid = diag1Sym(grid).split("\n");
  let gridRows = [];

  for (let row = 0; row < grid.length; row++) {
    let str = "";
    for (let col = 0; col < grid.length; col++) {
      str += grid[row][col];
    }
    gridRows.push(str);
  }

  let resultStr = "";
  const length = diag1Grid.length;

  for (let i = 0; i < length; i++) {
    resultStr += `${gridRows[i]}|${diag1Grid[i]}`;
    i != length - 1 ? (resultStr += "\n") : (resultStr += "");
  }

  return resultStr;
}

function oper(transform, string) {
  const grid = convertToGrid(string);
  return transform(grid);
}

function convertToGrid(string) {
  const grid = [];
  const gridRows = string.split("\n");

  for (let i = 0; i < gridRows.length; i++) {
    const gridRow = gridRows[i];
    const row = [];
    for (let j = 0; j < gridRow.length; j++) {
      const gridCell = gridRow[j];
      row.push(gridCell);
    }
    grid.push(row);
  }
  return grid;
}

const s = "abcd\nefgh\nijkl\nmnop";
// console.log(oper(rot90Clock, s), "miea\nnjfb\nokgc\nplhd");

// console.log(oper(diag1Sym, s), "aeim\nbfjn\ncgko\ndhlp");

console.log(
  oper(selfieAndDiag1, s),
  "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
);

// console.log(
//   oper(rot90Clock, "rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb"),
//   "Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle"
// );

// console.log(
//   oper(diag1Sym, "wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ"),
//   "weetvI\nuNhBWF\nUHiTNk\nyWflpG\nPxmFdj\nCwiIvZ"
// );

console.log(
  oper(selfieAndDiag1, "NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg"),
  "NJVGhr|NMtsrz\nMObsvw|JOPotj\ntPhCtl|VbhEQl\nsoEnhi|GsCnRi\nrtQRLK|hvthLW\nzjliWg|rwliKg"
);
