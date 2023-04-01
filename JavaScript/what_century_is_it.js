/* Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th" */

function whatCentury(year) {
  let century = Math.ceil(Number(year) / 100);
  let ending = "";
  century = century.toString();

  if (century.length == 1) {
    switch (century) {
      case "1":
        ending = "st";
        break;
      case "2":
        ending = "nd";
        break;
      case "3":
        ending = "rd";
        break;
      default:
        ending = "th";
        break;
    }
  } else {
    if (!century.startsWith("1")) {
      if (century.endsWith("1")) {
        ending = "st";
      } else if (century.endsWith("2")) {
        ending = "nd";
      } else if (century.endsWith("3")) {
        ending = "rd";
      } else {
        ending = "th";
      }
    } else {
      ending = "th";
    }
  }

  return `${century}${ending}`;
}

console.log(whatCentury("1999"), "20th");
console.log(whatCentury("2011"), "21st");
console.log(whatCentury("2154"), "22nd");
console.log(whatCentury("2259"), "23rd");
console.log(whatCentury("1234"), "13th");
console.log(whatCentury("1023"), "11th");
console.log(whatCentury("2000"), "20th");
