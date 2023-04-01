/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199. */

function containsAgeGroups(list, lowerBound, upperBound) {
  return list.some(
    (person) => person.age > lowerBound && person.age < upperBound
  );
}

function isAgeDiverse(list) {
  return (
    containsAgeGroups(list, 12, 20) &&
    containsAgeGroups(list, 19, 30) &&
    containsAgeGroups(list, 29, 40) &&
    containsAgeGroups(list, 39, 50) &&
    containsAgeGroups(list, 49, 60) &&
    containsAgeGroups(list, 59, 70) &&
    containsAgeGroups(list, 69, 80) &&
    containsAgeGroups(list, 79, 90) &&
    containsAgeGroups(list, 89, 100) &&
    containsAgeGroups(list, 99, 200)
  );
}

const list1 = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 40,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 59,
    language: "C",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 60,
    language: "C",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 75,
    language: "Python",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 88,
    language: "Ruby",
  },
  {
    firstName: "Viktoria",
    lastName: "W.",
    country: "Bulgaria",
    continent: "Europe",
    age: 98,
    language: "PHP",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
  },
];

const list2 = [
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
];

const list3 = [
  {
    firstName: "Sofia",
    lastName: "P.",
    country: "Italy",
    continent: "Europe",
    age: 41,
    language: "Clojure",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Python",
  },
  {
    firstName: "Rimas",
    lastName: "C.",
    country: "Jordan",
    continent: "Asia",
    age: 44,
    language: "Java",
  },
];

console.log(isAgeDiverse(list1), true);
console.log(isAgeDiverse(list2), false);
console.log(isAgeDiverse(list3), false);
