/* You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible. */

function findSenior(list) {
  const result = [];
  let eldestAge = 0;

  for (let i = 0; i < list.length; i++) {
    const age = list[i].age;
    if (age > eldestAge) {
      eldestAge = age;
    }
  }
  for (let i = 0; i < list.length; i++) {
    const age = list[i].age;
    if (age == eldestAge) result.push(list[i]);
  }
  return result;
}

const list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

const answer1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

const list2 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
];

const answer2 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
];

const list3 = [
  {
    firstName: "Alexander",
    lastName: "F.",
    country: "Russia",
    continent: "Europe",
    age: 89,
    language: "Java",
  },
  {
    firstName: "Fatima",
    lastName: "K.",
    country: "Saudi Arabia",
    continent: "Asia",
    age: 21,
    language: "Clojure",
  },
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Nikola",
    lastName: "H.",
    country: "Serbia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Jakub",
    lastName: "I.",
    country: "Slovakia",
    continent: "Europe",
    age: 28,
    language: "Java",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 89,
    language: "JavaScript",
  },
  {
    firstName: "Luka",
    lastName: "J.",
    country: "Slovenia",
    continent: "Europe",
    age: 29,
    language: "Clojure",
  },
  {
    firstName: "Mariam",
    lastName: "B.",
    country: "Egypt",
    continent: "Africa",
    age: 89,
    language: "Python",
  },
];

const answer3 = [
  {
    firstName: "Alexander",
    lastName: "F.",
    country: "Russia",
    continent: "Europe",
    age: 89,
    language: "Java",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 89,
    language: "JavaScript",
  },
  {
    firstName: "Mariam",
    lastName: "B.",
    country: "Egypt",
    continent: "Africa",
    age: 89,
    language: "Python",
  },
];

console.log(JSON.stringify(findSenior(list1)) === JSON.stringify(answer1));
console.log(JSON.stringify(findSenior(list2)) === JSON.stringify(answer2));
console.log(JSON.stringify(findSenior(list3)) === JSON.stringify(answer3));
