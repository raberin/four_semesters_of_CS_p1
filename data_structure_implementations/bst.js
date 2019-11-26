/* 

Trees cans be a useful structure for a middle ground between LinkedLists and ArrayLists. We're going to look a simple flavor of trees: the trusty binary search tree. The gist of the BST is that a node in a BST has zero, one, or two subtrees. Every element in the left subtree is lesser than the value of the node and every node in the right is greater. By being able to depend on this fact, it makes it very simple to add and find new elements. Like LinkedLists, we just have to change pointers when we add new elements. Let's step through an add.


Current Tree:
      10
    /   \
  5      15
 / \     /
3   8   12

-> .add is called with 7
-> start at root (10)
-> lesser than 10, go left to 5
-> greater than 5, go right to 8
-> lesser than 8, go left
-> no element at left, create new node
   and make it the left subtree of 8

         10
       /   \
     5      15
    / \     /
   3   8   12
      /
     7
                    
BSTs get an average case of O(log n) on gets, adds, and deletes, but they can have a worst case of O(n) if you do something like add a sorted list to a BST. Go ahead, do a BST then add [1,2,3,4,5] to it.


1
 \
  2
   \
    3
     \
      4
       \
        5
                    
Kind of a problem, right? Well, we'll address that in the next problem. BSTs do perform well so long as you stay away from their edge cases.

*/

/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/
class Node {
  //left and right have default values of null
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      //Base case
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (true) {
      //We have to purposefully break out of this while loop
      if (value < current.value) {
        this.root.left; //go left
        if (current.left) {
          //If left node is true, move left
          current = current.left;
        } else {
          current.left = new Node(value); //create node to left of root
          break; //exit loop
        }
      } else {
        this.root.right; //go right
        if (current.right) {
          current = current.right; //if right node is true, move right
        } else {
          current.right = new Node(value); //Create node to right of root
          break; //exit loop
        }
      }
    }
  }
}

const tree1 = new Tree();
tree1.add(5);
tree1.add(6);
tree1.add(7);
tree1.add(4);

console.log(tree1);
