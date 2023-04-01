/* 
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. 
*/

function expandedForm(num) {
  let numAsStr = num.toString();
  let expandedNum = "";
  for (let index = 0; index < numAsStr.length; index++) {
    if (numAsStr[index] == "0") {
      continue;
    } else {
      let numOfZeros = numAsStr.length - (index + 1);
      expandedNum += numAsStr[index];
      for (let num = 0; num < numOfZeros; num++) {
        expandedNum += "0";
      }
      expandedNum += " + ";
    }
  }

  return expandedNum.substring(0, expandedNum.length - 3).trim();
}

console.log(expandedForm(12));
