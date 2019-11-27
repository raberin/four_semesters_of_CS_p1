/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  There is a tree visualization engine that should run automatically. Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value
  
  As always, you can rename describe to xdescribe to prevent the unit tests from running and the visualization
  from displaying

*/

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value); //recursively add node
    }
  }
}

class Node {
  //left and right have default values of null
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
  add(value) {
    if (value < this.value) {
      //go left
      if (this.left) {
        //If theres a left node avail recursively add to left of node
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        //Checks the heights on right side, if less, add +1
        this.height = this.left.height + 1;
      }
    } else {
      //go right
      if (this.right) {
        //If theres a right node avail recursively add to right of node
        console.log(this.right, this.left);
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
      if (!this.left || this.right.height > this.left.height) {
        //Checks the heights on left side, if less, add +1
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }
  balance() {
    const rightHeight = this.right ? this.right.height : 0; //Grabs right height of node, if null 0 and vice versa
    const leftHeight = this.left ? this.left.height : 0;

    console.log(this.value, leftHeight, rightHeight);

    //Checks if leftHeight is greater than rightHeight + 1
    if (leftHeight > rightHeight + 1) {
      //Checks if its left heavy or right heavy
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;

      //If left child node is right heavy, perform a right rotation on left child node (Double Rotation)
      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }
      //Always perform left rotation
      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      const rightRightHeight = this.right.right ? this.right.right.height : 0;
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;

      //If right child node is left heavy, perform a left rotation on right child node (Double Rotation)
      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }
      //Always perform right rotation
      this.rotateRR();
    }
  }
  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value; //swap the values of nodes A and B
    this.left = this.right; //make node B the left child of node A
    this.right = this.right.right; //make node C the right child of node A
    this.left.right = this.left.left; //move node B's right child to its left child
    this.left.left = leftBefore;
    this.left.value = valueBefore; //swap the values of nodes A and B
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    //Everything like rotateRR but reversed
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    if (!this.right && !this.left) {
      //If no children, height is 1
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      //Checks height on right, if less +1
      this.height = this.left.height + 1;
    } else {
      this.height = this.right.height + 1;
    }
  }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map(num => tree.add(num));
console.log(tree);
