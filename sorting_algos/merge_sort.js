/* 
Merge Sort is a divide-and-conquer algo. This is a recursive algorithm. 
We make the assumption that these lists are both sorted. 
Array.sort() is Merge Sort under the hood!

The basic gist of merge sort is that you're going to take your big list, and first divide down in two half size lists and recursively call merge sort on those smaller list, which in turn will do the same. The base case is when you have a list of one, at which point you will return that sorted list of one. On the way up the recursive calls, you will merge those sorted lists together (preferably by another merge function you'll write) that walks through both lists simultaneously and inserts the smaller value first, effectively creating a bigger sorted list.


[1, 5, 6] sublist 1
[2, 7, 8] sublist 2

-> compare 1 and 2, take 1 and put it in new list
-> compare 5 and 2, take 2 and put it in new list
-> compare 5 and 7, take 5 and put it in new list
-> compare 6 and 7, take 6 and put it in new list
-> list one has no more elements
   add the rest of list two in order (7 and 8)


BEST CASE: O(nlogn) Time / O(n) Space

*/
/*
Pseudocode
1. Base case if length of list is 1 return it
2. Split the array in to 2 similar sized arrays
*/

//Utilizes extra space - Roenz Way
const stitch = (left, right) => {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;
  while (result.length < left.length + right.length) {
    //Check which number is less, and pushes it to result OR
    //If the right array is empty / all values have been used
    if (left[leftIndex] <= right[rightIndex] || rightIndex === right.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result;
};

//Mutating the current arrays - FE Masters way
const stitch = (left, right) => {
  const result = [];

  //The lengths of left && right is true (ES5 way left.length > 0 && right.length > 0)
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      //.shift() removes 1st element from index and returns it
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  //concats the left over elements of whatever array was leftover
  return results.concat(left, right);
};

let nums1 = [1, 5, 6, 9, 11];
let nums2 = [2, 7, 8, 10, 12, 14];

//console.log(stitch(nums1, nums2)) => [ 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 14 ]

const mergeSort = nums => {
  //Base case
  if (nums.length < 2) {
    return nums;
  }
  //Creating 2 arrays by slicing
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  //Combines the 2 sorted arrays together
  return stitch(sortedLeft, sortedRight);
};

let nums3 = [...nums1, ...nums2];
console.log(mergeSort(nums3));
