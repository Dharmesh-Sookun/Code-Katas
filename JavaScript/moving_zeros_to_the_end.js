/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

/* var moveZeros = function (arr) {
  let resultArr = [];
  let zeroCount = 0;

  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];
    if (currentElement !== 0) {
      resultArr.push(currentElement);
    } else {
      zeroCount++;
    }
  }

  for (let counter = 0; counter < zeroCount; counter++) {
    resultArr.push(0);
  }

  return resultArr;
}; */

var moveZeros = function (arr) {
  let zeroCount = 0;

  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];
    if (currentElement === 0) {
      zeroCount++;
      arr.splice(index, 1);
    }
  }

  for (let count = 0; count < zeroCount; count++) {
    arr.push(0);
  }

  return arr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
