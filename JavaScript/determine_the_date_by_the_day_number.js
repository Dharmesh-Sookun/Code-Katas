/* What date corresponds to the nth day of the year?
The answer depends on whether the year is a leap year or not.

Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
Only valid combinations of a day number and isLeap will be tested.

Examples:
getDay(41, false)   =>  "February, 10"  //  41st day of non-leap year is February, 10
getDay(60, false)   =>  "March, 1"      //  60th day of non-leap year is March, 1
getDay(60, true)    =>  "February, 29"  //  60th day of leap year is February, 29
getDay(365, false)  =>  "December, 31"  //  365th day of non-leap year is December, 31
getDay(366, true)   =>  "December, 31"  //  366th day of leap year is December, 31
 */

function getDay(day, isLeap) {
  if (day < 32) return `January, ${day}`;
  let numOfDaysInFeb = null;
  isLeap ? (numOfDaysInFeb = 29) : (numOfDaysInFeb = 28);
  const numOfDays = [
    31,
    numOfDaysInFeb,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let count = day;
  let index = 0;
  while (count > 31) {
    count -= numOfDays[index];
    index++;
  }
  if (count >= 29 && !isLeap && index == 1) {
    return "March, 1";
  } else if (count > 29 && isLeap && index == 1) {
    return "March, 1";
  } else {
    return `${months[index]}, ${count}`;
  }
}
function getDay(day, isLeap) {
  let year = null;
  isLeap ? (year = 2020) : (year = 2021);
  date = new Date(year, 0, day);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]}, ${date.getDate()}`;
}
console.log(getDay(15, false), "January, 15");
console.log(getDay(41, false), "February, 10");
console.log(getDay(59, false), "February, 28");
console.log(getDay(60, false), "March, 1");
console.log(getDay(60, true), "February, 29");
console.log(getDay(365, false), "December, 31");
console.log(getDay(366, true), "December, 31");
