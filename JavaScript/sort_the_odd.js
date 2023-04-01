/* 
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4] 
*/

function sortArray(array) {
  let temp;

  for (let i = 0; i < array.length; i++) {
    if (isOdd(array[i])) {
      for (let j = i + 1; j < array.length; j++) {
        if (isOdd(array[j])) {
          if (array[j] < array[i]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
    }
  }
  return array;
}
function isOdd(num) {
  return num % 2 != 0;
}

console.log(sortArray([5, 3, 1, 8, 0]));
