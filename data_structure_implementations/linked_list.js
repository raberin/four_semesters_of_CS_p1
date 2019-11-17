// For our second data structure, we're going to implement a LinkedList. LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and a pointer to the next node in the list.

// LinkedLists have their ups and downs. On one hand, adding and removing is a breeze: you just have the change the next pointer on the previous node and that's it. Getting is a pain though: if .get is called you have to loop through the nodes until you get to the right node. And that's the tradeoff between LinkedList and ArrayList: LinkedList's adds and deletes are O(1) but the gets are O(n); ArrayList's adds and deletes are O(n) but the gets are O(1). So which one is better? It depends! If you're doing a bunch of adds and deletes but not many gets, stick to LinkedLists. Doing a bunch of gets? ArrayLists. Both? You decide!

//Pros: ADDING, REMOVING O(1)(just change next pointer on prev node)
//Cons: GETTING O(n) (must loop through list to search for item)

// Let's dissect a delete.

// value: [a]   [b]   [c]   [d]
// next:  [ ]-> [ ]-> [ ]-> [ ]-> null

// -> delete is called on index 2 (value 'c')
// -> grab the head (value 'a')
// -> loop through the nexts until you get the index
//    before the one to be deleted (value 'b')
// -> change the the next of index 1 to be the next of index 2
// -> decrement length
// -> return the value of the deleted node

/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    //Create new node
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    //This is a push so its always gonna be the tail
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }
  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) return null;
    return node.value;
  }

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      //Checks if value we want is in the current node
      if (test(value, current.value, i, current)) {
        return current;
      }
      //If value is not in current node hop on next node and try again
      current = current.next;
      i++;
    }
    return null; //We didnt find what we're looking for
  }

  _test(search, nodeValue) {
    return search === nodeValue;
  }

  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        //Changes current head to the value next to it thus deleting current node
        this.head = head.next;
      } else {
        this.tail = this.head = null;
      }
      this.length--;
      return head.value;
    }

    //Finding the node before the index
    const node = this._find(index - 1, this._testIndex);
    const excise = node.next; //The node to be deleted

    if (!excise) return null; //edge case doesnt exist

    node.next = excise.next; //The path from the node before excised to the node after excised

    if (node.next && !node.next.next) {
      //Checks if the next node is true and the one after that is null
      this.tail = node.next;
    }
    this.length--;
    return excise.value;
  }

  _testIndex(search, __, i) {
    return search === i;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
