/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another 
and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] 
*/

function arrayDiff(a, b) {
  if (b.length == 0) {
    return a;
  } else {
    return a.filter((n) => !b.includes(n));
  }
}

console.log(
  arrayDiff(
    [
      14,
      3,
      15,
      -16,
      -2,
      9,
      13,
      11,
      -14,
      -12,
      14,
      9,
      -2,
      -16,
      -6,
      -11,
      -19,
      -12,
      10,
      -13,
    ],
    [14, -16, -11, 3, -16, 9, 14, 15, -19, -14]
  )
);
