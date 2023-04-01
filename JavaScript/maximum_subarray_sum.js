/* 
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or 
list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/
subarray. 
*/

var maxSequence = function (arr) {
  let max_so_far = 0;
  let max_ending_here = 0;

  for (let i = 0; i < arr.length; i++) {
    max_ending_here += arr[i];
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
  }
  return max_so_far;
};

console.log(maxSequence([]));
