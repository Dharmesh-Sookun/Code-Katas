/* Description:
Your friend owns a busy restaurant and he asked you to help him figure out a way to manage table reservations. There are 10 tables in the restaurant (represented as objects):

4 tables for 2 people
2 tables for 3 people
2 tables for 4 people
1 table for 6 people
1 table for 8 people
You need to write a function reserve that takes one argument:

Input
Bookings which is an array of integers representing all bookings for the same time. Each integer is a number of people for each booking. (example: [2, 4, 4] - one booking for 2 people, and two bookings for 4 people)

Rules
The restaurant has a set of rules about bookings:

They don't reserve more than one table for any bookings.
Therefore, they don't take bookings for more than 8 people.
They can offer a bigger table for a booking but only if there will be just one spare seat left unoccupied at this table.
The bookings are available on a first come first served basis.
Output
The function must return an array containing the names of tables that must be reserved and the list of the indexes of the bookings that weren't possible:

[
  ["table for two", "table for three", "table for three"],
  "Bookings at the following indexes were not accepted: 0, 1, 4"
}
If all bookings are accepted, the second element is just an empty string. */

function reserve(bookings) {
  if (bookings.length == 0) return [[], ""];

  const forTwo = { name: "table for two", seats: 2, num: 4 };
  const forThree = { name: "table for three", seats: 3, num: 2 };
  const forFour = { name: "table for four", seats: 4, num: 2 };
  const forSix = { name: "table for six", seats: 6, num: 1 };
  const forEight = { name: "table for eight", seats: 8, num: 1 };

  let notAccepted = [];
  const reservedTables = [];

  for (let i = 0; i < bookings.length; i++) {
    switch (bookings[i]) {
      case 1:
        if (forTwo.num > 0) {
          reservedTables.push(forTwo.name);
          forTwo.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 2:
        if (forTwo.num > 0) {
          reservedTables.push(forTwo.name);
          forTwo.num -= 1;
        } else if (forThree.num > 0) {
          reservedTables.push(forThree.name);
          forThree.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 3:
        if (forThree.num > 0) {
          reservedTables.push(forThree.name);
          forThree.num -= 1;
        } else if (forFour.num > 0) {
          reservedTables.push(forFour.name);
          forFour.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 4:
        if (forFour.num > 0) {
          reservedTables.push(forFour.name);
          forFour.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 5:
        if (forSix.num > 0) {
          reservedTables.push(forSix.name);
          forSix.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 6:
        if (forSix.num > 0) {
          reservedTables.push(forSix.name);
          forSix.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 7:
        if (forEight.num > 0) {
          reservedTables.push(forEight.name);
          forEight.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      case 8:
        if (forEight.num > 0) {
          reservedTables.push(forEight.name);
          forEight.num -= 1;
        } else {
          notAccepted.push(i);
        }
        break;

      default:
        notAccepted.push(i);
        break;
    }
  }

  return [
    reservedTables,
    notAccepted.length > 0
      ? "Bookings at the following indexes were not accepted: " +
        notAccepted.join(", ")
      : "",
  ];
}
console.log([5, 6].join(", "));
console.log(reserve([2, 3, 4, 5, 7, 8, 6, 2]), [
  [
    "table for two",
    "table for three",
    "table for four",
    "table for six",
    "table for eight",
    "table for two",
  ],
  "Bookings at the following indexes were not accepted: 5, 6",
]);
console.log(reserve([]), [[], ""]);
console.log(reserve([1]), [["table for two"], ""]);
console.log(reserve([2, 3, 4, 6, 8]), [
  [
    "table for two",
    "table for three",
    "table for four",
    "table for six",
    "table for eight",
  ],
  "",
]);
console.log(reserve([5, 5]), [
  ["table for six"],
  "Bookings at the following indexes were not accepted: 1",
]);
console.log(reserve([10]), [
  [],
  "Bookings at the following indexes were not accepted: 0",
]);
console.log(reserve([4, 4, 10, 3, 3, 3]), [
  ["table for four", "table for four", "table for three", "table for three"],
]);

console.log(reserve([2, 3, 3, 8, 3, 9, 2]));
