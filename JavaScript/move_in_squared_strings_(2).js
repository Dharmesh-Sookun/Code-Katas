/* You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"
selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.
s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

Task:
Write these two functions rotand selfie_and_rot
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)
Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
Notes:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Forthcoming katas will study other tranformations.

Bash Note:
The input strings are separated by , instead of \n. The ouput strings should be separated by \r instead of \n. See "Sample Tests". */

function rot(grid) {
  let resultStr = "";
  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = grid.length - 1; col >= 0; col--) {
      resultStr += grid[row][col];
    }
    row != 0 ? (resultStr += "\n") : (resultStr += "");
  }
  return resultStr;
}

function selfieAndRot(grid) {
  const rotationResultStr = rot(grid);
  const rotationResultRows = rotationResultStr.split("\n");
  let originalRows = [];

  for (let row = 0; row < grid.length; row++) {
    let rowStr = "";
    for (let col = 0; col < grid.length; col++) {
      rowStr += grid[row][col];
    }
    originalRows.push(rowStr);
  }

  let resultStr = "";

  for (let i = 0; i < originalRows.length; i++) {
    const current = originalRows[i];
    resultStr += `${current}`;
    for (let j = 0; j < current.length; j++) {
      resultStr += ".";
    }
    i != originalRows.length - 1 ? (resultStr += "\n") : (resultStr += "");
  }

  resultStr += "\n";

  for (let i = 0; i < rotationResultRows.length; i++) {
    const current = rotationResultRows[i];
    for (let j = 0; j < current.length; j++) {
      resultStr += ".";
    }
    resultStr += `${current}`;
    i != rotationResultRows.length - 1
      ? (resultStr += "\n")
      : (resultStr += "");
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
      const cell = gridRow[j];
      row.push(cell);
    }
    grid.push(row);
  }
  return grid;
}

const s = "abcd\nefgh\nijkl\nmnop";

console.log(oper(rot, s) === "ponm\nlkji\nhgfe\ndcba");

console.log(
  oper(selfieAndRot, s) ===
    "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
);

console.log(
  oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL") ===
    "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif"
);

console.log(oper(rot, "rkKv\ncofM\nzXkh\nflCB") === "BClf\nhkXz\nMfoc\nvKkr");

console.log(
  oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP") ===
    "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
);

console.log(
  oper(selfieAndRot, "uLcq\nJkuL\nYirX\nnwMB") ===
    "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu"
);
