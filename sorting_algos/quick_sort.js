/* 
Quick Sort is another divide-and-conquer algo. This is a recursive algorithm. 
We make the assumption that these lists are both sorted. 
Array.sort() is Merge Sort under the hood!

It's another divide-and-conquer, recursive algorithm but it takes a slightly different approach. The basic gist is that you take the last element in the list and call that the pivot. Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in a "right" list. 
You then call quick sort on the left and right lists independently (hence the recursion.) 
After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list (in that order.) 
The base case is when you have a list of length 1 or 0, where you just return the list given to you.


[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]

BEST CASE: O(nlogn) Time / O(n) Space
WORSE CASE: Not good AT ALL for sorted lists

*/
//Mutates original array
const quickSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  let pivot = nums.pop();
  let left = [];
  let right = [];

  //Sorting each ele anything less than pivot goes left
  //Greater than pivot goes right
  while (nums.length) {
    if (nums[0] < pivot) {
      left.push(nums.shift());
    } else {
      right.push(nums.shift());
    }
  }

  let qL = quickSort(left);
  let qR = quickSort(right);

  return [...qL, pivot, ...qR];
};

//Non mutating function
const quickSort = nums => {
  if (nums.length < 2) {
    return nums;
  }

  let pivot = nums[nums.length - 1];
  let left = [];
  let right = [];

  //Sorting each ele anything less than pivot goes left
  //Greater than pivot goes right (iterating up till BEFORE LAST element)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];

  //Another way to do the return statement above
  // let qL = quickSort(left);
  // let qR = quickSort(right)

  // return [...qL, pivot, ...qR];
};

console.log(quickSort([4, 9, 3, 5])); //[3,4,5,9]
console.log(quickSort([4, 9, 3, 5, 10, 6, 11, 1, 5, 20, 18])); //
