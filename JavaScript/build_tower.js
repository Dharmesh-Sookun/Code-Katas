/* 
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',     1 => 1
  '    ***    ',      2 => 3
  '   *****   ',        3 => 5
  '  *******  ',           4 => 7
  ' ********* ', 
  '***********'
] 
*/

function towerBuilder(nFloors) {
  let resultArr = [];
  let count = 0;

  //Row
  for (let row = 1; row <= nFloors; row++) {
    let resultStr = "";

    //Spaces before
    for (let spaces = 1; spaces <= nFloors - row; spaces++) {
      resultStr += " ";
    }

    //Stars
    for (let stars_i = 1; stars_i <= row + count; stars_i++) {
      resultStr += "*";
    }

    //Spaces after
    for (let spaces = 1; spaces <= nFloors - row; spaces++) {
      resultStr += " ";
    }

    resultArr.push(resultStr);
    count++;
  }
  return resultArr;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
