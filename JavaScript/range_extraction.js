/* 
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20" 
*/

function solution(list) {
  const ranges = [[list[0]]];
  let currentRange = ranges[0];

  for (let i = 1; i < list.length; i++) {
    const currentNumber = list[i];
    const lastValueInRange = currentRange[currentRange.length - 1];

    if (Math.abs(currentNumber - lastValueInRange) === 1) {
      currentRange.push(currentNumber);
    } else {
      currentRange = [currentNumber];
      ranges.push(currentRange);
    }
  }

  return ranges
    .map((range) => {
      if (range.length === 1) return "" + range[0];
      if (range.length === 2) return range.join(",");
      return "" + range[0] + "-" + range[range.length - 1];
    })
    .join(",");
}

console.log(
  (solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
  ]),
  "-6,-3-1,3-5,7-11,14,15,17-20")
);
