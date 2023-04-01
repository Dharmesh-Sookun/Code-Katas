/* 
Common denominators

You will have a list of rationals in the form

 { {numer_1, denom_1} , ... {numer_n, denom_n} } 
or

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or

 [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints.

You have to produce a result in the form

 (N_1, D) ... (N_n, D) 
or

 [ [N_1, D] ... [N_n, D] ] 
or

 [ (N_1', D) , ... (N_n, D) ] 
or

{{N_1, D} ... {N_n, D}} 
or

"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests)

in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that first translations were written long ago - more than 4 years - these translations have only 
irreducible fractions. Newer translations have some reducible fractions. To be on the safe side it is better to do 
a bit more work by simplifying fractions even if they don't have to be.

Note for Bash:
input is a string, e.g "2,4,2,6,2,8"

output is then "6 12 4 12 3 12" 
*/

function convertFrac(lst) {
  let denominators = [];

  for (let i = 0; i < lst.length; i++) {
    denominators.push(lst[i][1]);
  }

  let common_denominator = lcm_of_n_numbers(denominators);

  let str = "";

  for (let i = 0; i < lst.length; i++) {
    let newNum = lst[i][0] * (common_denominator / lst[i][1]);
    str += "(" + newNum + "," + common_denominator + ")";
  }

  return str;
}

function gcd_of_2_numbers(x, y) {
  if (!y) return y === 0 ? x : NaN;
  return gcd_of_2_numbers(y, x % y);
}

function lcm_of_2_numbers(x, y) {
  return (x * y) / gcd_of_2_numbers(x, y);
}

function lcm_of_n_numbers(list) {
  let n = 1;
  for (let i = 0; i < list.length; i++) {
    n = lcm_of_2_numbers(list[i], n);
  }
  return n;
}

console.log(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);
