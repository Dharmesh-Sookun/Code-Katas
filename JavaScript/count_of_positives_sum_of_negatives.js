/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. 
*/

function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  let sum = 0;
  let count = 0;

  input.forEach((element) => {
    if (element > 0) {
      count++;
    } else {
      sum += element;
    }
  });

  return [count, sum];
}

var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
var expected = [10, -65];

console.log(actual[0] == expected[0] && actual[1] == expected[1]);
