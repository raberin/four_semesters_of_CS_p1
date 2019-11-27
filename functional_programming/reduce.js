/*
Next on our functional adventure is reduce. Reduce is really useful when you a have a list of values that you want to combine in some meaningful way down to one value. You'll often hear the term map/reduce thrown around in regards to data science; they're used a lot in that sense because you're taking large sets of data, doing some transformations on them to get them in a certain state, and then reducing them down to useful statistics.

A reduce function involves a list it's being called, a function that does the reducing, the accumulator, and the seed value. The accumulator is the interim value that is passed into each call of the reducer function that the function then returns. The value returned is then passed into the next call of the reducer function on the next value. The seed value is the value of the first accumulator. If there's no seed value, the zero index in the array is the seed.


var list = ['a','b','c'];
list.reduce(function(accumulator, letter) {
    return accumulator + letter.toUpperCase();
}); // returns aBC since a becomes the seed

list.reduce(function(accumulator, letter) {
    return accumulator + letter.toUpperCase();
}, ''); // returns ABC since '' starts as the seed
                    

Reduce
  
  Good for taking a list and reducing it down to one value in a user defined way.
  
  Test 1
  Name your function addTogether
  Take in a list and return the result of that list added together
  Do not use a loop
  
  Test 2
  Name your function concatenateStringsWithSpaces
  Take in a list, return that string with those strings concatenated together with spaces between them
  Don't worry about leading or trailing whitespace
  Do not use .join or loops
  
  Test 3
  Name your function squaresAndSubtracts
  Map over your list, square each value, and then subtract them in order (take index 0, subtract index 1, 
  then index 2, etc.)
  Do not use a loop
  
  Test 4
  Name your function myReduce
  Implement your own reduce
  myReduce takes three parameters: the list being operated on, a function to apply the reduction, and 
  seed value to start the reduce
  You will need to use a loop
  
*/

let nums = [1, 2, 3, 4, 5];
let letters = ["a", "b", "c", "d", "e"];

//Test 1
const addTogether = arr => arr.reduce((acc, num) => acc + num);
console.log(addTogether(nums));

//Test 2
const concatenateStringsWithSpaces = arr =>
  arr.reduce((acc, letter) => `${acc} ${letter}`);
console.log(concatenateStringsWithSpaces(letters));

//Test 3
const squaresAndSubtracts = arr =>
  arr.map(num => Math.pow(num, 2)).reduce((acc, num) => acc - num);
console.log(squaresAndSubtracts(nums));

//Test 4
const myReduce = (arr, cb, initialVal = 0) => {
  let result = initialVal;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i]);
    console.log(result);
  }
  return result;
};

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log(myReduce(nums, add));
console.log(myReduce(nums, subtract));
