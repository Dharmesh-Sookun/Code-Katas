/* 
A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it. 
*/

const isPP = (n) => {
  const sqrt_n = Math.sqrt(n);

  for (let i = 2; i <= sqrt_n; i++) {
    let power = 2;
    let result = i ** power;

    while (result <= n && result > 0) {
      if (result == n) {
        return [i, power];
      }
      power++;
      result = i ** power;
    }
  }
  return null;
};

console.log(isPP(71008211968));

console.log(isPP(18747));

console.log(isPP(16));
console.log(isPP(4), [2, 2]);
console.log(isPP(9), [3, 2]);
console.log(isPP(5), null);
// var pp = [
//     4,
//     8,
//     9,
//     16,
//     25,
//     27,
//     32,
//     36,
//     49,
//     64,
//     81,
//     100,
//     121,
//     125,
//     128,
//     144,
//     169,
//     196,
//     216,
//     225,
//     243,
//     256,
//     289,
//     324,
//     343,
//     361,
//     400,
//     441,
//     484,
//   ],
//   i;
// for (i = 0; i < pp.length; ++i) {
//   console.log(
//     isPP(pp[i]) !== null,
//     "the perfect power " + pp[i] + " wasn't recognized as one"
//   );
// }

// var k, m, i, r, l;
// for (i = 0; i < 100; ++i) {
//   (m = (2 + Math.random() * 0xff) | 0),
//     (k = (2 + (Math.random() * Math.log(0x0fffffff)) / Math.log(m)) | 0);
//   l = Math.pow(m, k);
//   r = isPP(l);
//   if (r === null) {
//     console.log(r !== null, l + " is a perfect power");
//     break;
//   } else if (Math.pow(r[0], r[1]) !== l) {
//     console.log(
//       Math.pow(r[0], r[1]),
//       l,
//       "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l
//     );
//     break;
//   }
// }

// var i, r, l;

// for (i = 0; i < 100; ++i) {
//   l = (Math.random() * 0x0000ffff) | 0;
//   r = isPP(l);
//   if (r !== null && Math.pow(r[0], r[1]) !== l) {
//     console.log(
//       Math.pow(r[0], r[1]),
//       l,
//       "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l
//     );
//     break;
//   }
// }
