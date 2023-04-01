/* I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
 */

function stringBreakers(n, string) {
  let result = "";
  let stringCpy = string;
  stringCpy = stringCpy.split(/\s+/).join("");

  while (stringCpy.length > 0) {
    result += stringCpy.substring(0, n);
    stringCpy = stringCpy.substring(n);
    if (stringCpy) result += "\n";
  }
  return result;
}

console.log(
  stringBreakers(5, "This is an example string") ==
    "Thisi" + "\n" + "sanex" + "\n" + "ample" + "\n" + "strin" + "\n" + "g"
);
