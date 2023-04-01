/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. 
*/

function incrementString(strng) {
  if (strng.length == 0) return "1";
  let resultStr = "";
  const last_char = strng.charAt(strng.length - 1);
  if (last_char.match(/[a-z]/) || last_char.match(/[A-Z]/)) {
    resultStr += strng + "1";
  } else {
    let last_number = "";
    let last_number_index;
    for (let index = strng.length - 1; index >= 0; index--) {
      const current_char = strng[index];
      if (current_char.match(/[0-9]/)) {
        last_number = current_char + last_number;
      } else {
        last_number_index = index;
        break;
      }
    }
    let last_number_added = "";
    last_number_added += (parseInt(last_number) + 1).toString();
    for (let counter = 0; counter < last_number.length; counter++) {
      if (last_number_added.length < last_number.length) {
        last_number_added = "0" + last_number_added;
      }
    }
    const str_section = strng.substring(0, last_number_index + 1);
    resultStr += str_section + last_number_added;
  }
  return resultStr;
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");
