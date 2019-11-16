/* 
Insertion Sort is an improved version of bubble sort.
What it does well is during mostly sorted arrays.

BEST CASE: ALMOST sorted or likely already sorted -- O(n)
WORSE CASE: In unsorted arrays, just as fast as bubble sort -- O(n^2)
*/

const insertionSort = nums => {
  //i is 1 because nums[0] is "sorted" since its just sub array with length of 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      //Only going to go through the first part of arr which is why j < i
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1); //Take out the num at index i
        nums.splice(j, 0, spliced[0]); //Insert spliced number after index j
        //spliced[0] because splice returns [num] not num so gotta say 0 index
      }
    }
  }
};
