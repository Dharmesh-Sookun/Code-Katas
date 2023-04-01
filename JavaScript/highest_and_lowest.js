/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest 
and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. 
*/

function highAndLow(numbers) {
  var numbersStrArr = numbers.split(" ");
  var numbersArr = [];

  for (var x = 0; x < numbersStrArr.length; x++) {
    var currentNumStr = numbersStrArr[x];
    var currentNum = parseInt(currentNumStr);
    numbersArr[x] = currentNum;
  }

  var highest = numbersArr[0];
  for (var x = 1; x < numbersArr.length; x++) {
    if (numbersArr[x] > highest) {
      highest = numbersArr[x];
    }
  }

  var lowest = numbersArr[0];
  for (var x = 1; x < numbersArr.length; x++) {
    if (numbersArr[x] < lowest) {
      lowest = numbersArr[x];
    }
  }

  var highestLowestStr = "" + highest + " " + lowest;

  return highestLowestStr;
}
