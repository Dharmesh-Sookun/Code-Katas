/* 
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun! 
*/

const findMissing = function (list) {
  let commonDifference;
  for (let index = 0; index < list.length - 1; index++) {
    const currentElement = list[index];
    const nextElement = list[index + 1];
    const newCommonDiff = nextElement - currentElement;
    if (newCommonDiff == commonDifference) {
      break;
    } else {
      commonDifference = newCommonDiff;
    }
  }

  for (let index = 0; index < list.length - 1; index++) {
    const currentElement = list[index];
    const nextElement = list[index + 1];
    const expectedNextElement = currentElement + commonDifference;
    if (expectedNextElement != nextElement) {
      return expectedNextElement;
    }
  }
};

console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([1, 3, 5, 9, 11]), 7);
