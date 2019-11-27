/*

  Filter!
  
  Test 1
  Name your function filterOutOdds
  Write a function that takes a list and filters out all the odd numbers
  Takes one parameter, a list of numbers
  Returns a list with only the even numbers remaining
  
  Test 2
  Name your function filterState
  Takes two parameters 
    - a list of people objects that have a name and state (as in state where they're from)
    - a string of the state which you want to filter for
  Returns a list of people objects (in the same order) from the state specified
  
  Test 3
  Name your function showOutOfCADevs
  You will need to use map, filter, and reduce (you could skip map by try to use it)
  Takes one parameter, a list of people objects (same from test 3)
  Takes that list, filters out people from CA, pulls out the name strings and throws
    away the rest of the object, uppercases the name of the person, and reduces the
    list down to one string, the names separated by a comma and a space  (", "). Use
    reduce, not join.
  Returns a string of uppercase names, separated by a comma and a space.
  
  Test 4
  Name your function myFilter
  myFilter implements filter
  Takes two parameters:
    - A list that will be filtered
    - A function that returns true if the item stays in the list, or false if it removed
  Returns a list that has been filtered

*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
  { name: "Brian Holt", state: "CA" },
  { name: "Ryan Florence", state: "WA" },
  { name: "Kent Dodds", state: "UT" },
  { name: "Kyle Simpson", state: "TX" },
  { name: "Pete Hunt", state: "CA" },
  { name: "Jafar Husain", state: "CA" },
  { name: "Yehuda Katz", state: "OR" },
  { name: "Matt Zabriskie", state: "UT" },
  { name: "Marshall Upshur", state: "CA" }
];

//Test 1
const filterOutOdds = arr => arr.filter(ele => ele % 2 === 0); //returns even numbers
console.log(filterOutOdds(nums)); //[ 2, 4, 6, 8, 10 ]

//Test 2
const filterState = (arr, state) => arr.filter(ele => ele.state === state);
console.log(filterState(people, "TX")); // [ { name: 'Kyle Simpson', state: 'TX' } ]

//Test 3
const showOutOfCADevs = arr =>
  arr
    .filter(ele => ele.state !== "CA")
    .map(ele => ele.name.toUpperCase())
    .reduce((acc, name) => `${acc}, ${name}`);
console.log(showOutOfCADevs(people)); //RYAN FLORENCE, KENT DODDS, KYLE SIMPSON, YEHUDA KATZ, MATT ZABRISKIE

//Test 4
const myFilter = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(myFilter(nums, ele => ele % 2 === 0)); //[ 2, 4, 6, 8, 10 ]
