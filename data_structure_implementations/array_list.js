// ArrayList is done by directly interacting with an allocated piece of memory. You then interact with that allocated piece of memory by addressing the specific indices in the array. In other words, you just treat it like a normal array. However things get a bit more complicated when deleting items from an ArrayList: you have to collapse the list down to the spot where you deleted.

// [a,b,c,d,e,f,g]
// -> delete index 3
// -> array is [a,b,c,(blank),e,f,g]
// -> shift elements 4,5,6 back one index
// -> array is [a,b,c,e,f,g]
// -> decrement length

//ArrayList are optimized for GETS
//Deoptimized for INSERTS and DELETES

/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  constructor(length) {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    let tmp = this.data[this.length - 1];
    this.length--;
    delete this.data[this.length];
    return tmp;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    let tmp = this.data[index];
    this._collapseTo(index);
    delete this.data[this.length - 1]; //Delete last item which is undefined
    this.length--;
    return tmp;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      //Shifting values to the left
      this.data[i] = this.data[i + 1];
    }
  }
}

let newArr = new ArrayList();
newArr.push("string");
newArr.push("boom");
newArr.push("tree");
newArr.push("tree2");
newArr.push("tree3");
console.log(newArr);
console.log(newArr.get(0));
console.log(newArr.pop());
console.log(newArr);
console.log(newArr.get(2));
console.log(newArr.delete(2));
console.log(newArr);
