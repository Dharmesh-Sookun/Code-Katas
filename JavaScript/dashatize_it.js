/* 
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' 
*/

// function dashatize(num) {
//   if (num == NaN) return "NaN";
//   num = Math.abs(num);
//   const numAsStr = num.toString();
//   let result = "";

//   for (let i = 0; i < numAsStr.length; i++) {
//     const currentDigit = +numAsStr[i];
//     if (currentDigit % 2 != 0) {
//       result += "-";
//       result += currentDigit;
//       result += "-";
//     } else {
//       result += currentDigit;
//     }
//   }

//   if (result[0] == "-") result = result.slice(1);
//   if (result[result.length - 1] == "-") result = result.slice(-1);

//   return result;
// }

function dashatize(num) {
  if (isNaN(num)) return "NaN";
  num = Math.abs(num);
  const numAsStr = num.toString();
  const result = [];

  for (let i = 0; i < numAsStr.length; i++) {
    const currentDigit = +numAsStr[i];
    if (currentDigit % 2 != 0) {
      const lastAddedVal = result[result.length - 1];
      if (lastAddedVal != "-") {
        result.push("-");
        result.push(currentDigit);
        result.push("-");
      } else {
        result.push(currentDigit);
        result.push("-");
      }
    } else {
      result.push(currentDigit);
    }
  }

  if (result[0] == "-") {
    result.shift();
  }

  if (result[result.length - 1] == "-") {
    result.pop();
  }

  return result.join("");
}

// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "");
// }

console.log(dashatize(274) === "2-7-4");
console.log(dashatize(5311) === "5-3-1-1");
console.log(dashatize(86320) === "86-3-20");
console.log(dashatize(974302) === "9-7-4-3-02");

console.log(dashatize(NaN) === "NaN");
console.log(dashatize(0) === "0");
console.log(dashatize(-1) === "1");
console.log(dashatize(-28369) === "28-3-6-9");
