/* 
Bubble Sort
In bubble sort, we're going to loop through the array and compare each index with the index next to it. If the those two numbers are out of order (the lesser index's value is greater than the greater index's value) we swap those two numbers' places in the array. We keep looping over that array until everything is in place and nothing was swapped during the last iteration.

BEST CASE: O(n^2) Best/Worst are the same
*/
//ANSWER
//codepen.io/btholt/pen/KdYPqa?editors=001

https: function bubbleSort(nums) {
  //do - while (do loop will keep running depending on while condition)
  do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        //Saving nums[i] in temp variable since it will be altered
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped); //while swapped === true, run again

  return nums;
}

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(bubbleSort(nums)); // [1,2,3,4,5,6,7,8,9,10]
