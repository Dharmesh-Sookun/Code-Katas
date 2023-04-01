/* In this Kata, you will be given an array of integers and your task is to return the number of arithmetic progressions of size 3 that are possible from that list. In each progression, the differences between the elements must be the same.

[1, 2, 3, 5, 7, 9] ==> 5
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]
All array elements will be unique and sorted. More examples in test cases.

Good luck! */

function solve(arr) {
  let counts = 0;
  let incrementBy = 1;
  const largestNumber = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    const firstNumber = arr[i];

    while (incrementBy < largestNumber) {
      const secondNumber = firstNumber + incrementBy;
      const thirdNumber = secondNumber + incrementBy;
      if (arr.indexOf(secondNumber) != -1 && arr.indexOf(thirdNumber) != -1)
        counts++;
      incrementBy++;
    }
    incrementBy = 1;
  }
  return counts;
}

console.log(solve([1, 2, 3, 4, 5]), 4);
console.log(solve([1, 2, 3, 5, 7, 9]), 5);
console.log(solve([0, 5, 8, 9, 11, 13, 14, 16, 17, 19]), 10);
console.log(solve([0, 1, 2, 3, 5, 6, 7, 11, 13, 15, 17, 19]), 17);
console.log(solve([0, 1, 4, 5, 7, 9, 10, 13, 15, 16, 18, 19]), 15);
console.log(solve([0, 1, 2, 3, 5, 8, 11, 13, 14, 16, 18, 19]), 13);
