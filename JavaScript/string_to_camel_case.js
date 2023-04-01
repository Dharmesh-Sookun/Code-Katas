/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" 
*/

function toCamelCase(str) {
  let delimiter = "";

  if (str.includes("-")) {
    delimiter = "-";
  } else if (str.includes("_")) {
    delimiter = "_";
  }

  let splitStr = str.split(delimiter);
  let camelCaseStr = "";

  for (let index = 0; index < splitStr.length; index++) {
    if (index == 0) {
      camelCaseStr += splitStr[0];
    } else {
      let currentVal = splitStr[index];
      let currentValCapitalised =
        currentVal.charAt(0).toUpperCase() + currentVal.slice(1);
      camelCaseStr += currentValCapitalised;
    }
  }

  return camelCaseStr;
}
