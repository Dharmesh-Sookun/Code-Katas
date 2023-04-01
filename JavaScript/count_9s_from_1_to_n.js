/* 
It's 9 time!

I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a postive integer.

number9(8) //should return 0
number9(9) //should return 1
number9(10) //should return 1
number9(98) //should return 18
number9(100) //should return 20 
*/

// return the number of 9's used to count out 1 to n
// function number9(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     let internalCount = 0;
//     const numAsStr = i.toString();
//     for (let j = 0; j < numAsStr.length; j++) {
//       if (numAsStr[j] == "9") {
//         internalCount++;
//       }
//     }
//     count += internalCount;
//   }
//   return count;
// }

// const number9 = (num) => {
//     const result = num.toString().match(/9/g).length;
// };

function number9Helper(num) {
  const pow = Math.floor(Math.log10(num));
  const round = Math.pow(10, pow);
  const times = Math.floor(num / round);
  const rest = Math.abs(num - round * times);
  let res = pow * (round == 10 ? 1 : round / 10) * times;
  if (num.toString()[0] == "9") res += rest;
  if (rest < 9) return res;
  else return res + number9Helper(rest);
}
function number9(num) {
  let res = number9Helper(num);
  res = res + (num.toString().split("9").length - 1);
  return res;
}

console.log(number9(1), 0);
console.log(number9(9), 1);
console.log(number9(100), 20);
console.log(number9(565754), 275645);
console.log(number9(10000000000), 10000000000);
