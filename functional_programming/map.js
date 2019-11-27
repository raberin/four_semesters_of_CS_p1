/*
  Map
  
  Map is a method on the array prototype in JavaScript. It takes one (required)
  parameter: the function you want called on each element in the array. While you
  can make these functions, I'd recommend making them named and thus resuseable.
  
  There are four tests to pass here:
  
  Test 1
  Make a function named doubleEach. doubleEach takes in an array and returns an
  array where every element in the array is doubled. Do not use a loop.
  
  Test 2
  Make a function named squareEach. squareEach takes in an array and returns an
  array where every element in the array is squared. Do not use a loop.
  
  Test 3
  Make a function named doubleAndSquareEach. If you made your other functions
  composeable, you can reuse them here. Return an array where each element
  is doubled first and then squared. Do not use a loop.
  
  Test 4
  Make a function named myMap. myMap is going to simulate the behavior of the
  map method on the Array prototype. myMap takes two parameters: the array being
  mapped over, and the function being called on each element. You must use a loop
  in myMap. myMap returns the resulting array of calling the inputted function on 
  each value in the array.

*/

const nums = [1, 2, 3, 4, 5];

//Test 1
const double = num => num * 2;
const doubleEach = arr => arr.map(double);

console.log(doubleEach(nums));

//Test 2
const squared = num => Math.pow(num, 2);
const squareEach = arr => arr.map(squared);

console.log(squareEach(nums));

//Test 3
const doubleAndSquareEach = arr => arr.map(double).map(squared);

console.log(doubleAndSquareEach(nums));

//Test 4
const myMap = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
};

console.log(myMap(nums, double));
