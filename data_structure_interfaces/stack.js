/* 

Stack is an interface that adheres to the "Last-In First-Out" (LIFO) mantra. In a stack, you can only push (add) or pop (remove.) The last thing you pushed will be what pop returns to you (pop will also remove it from the stack.) Often they'll have a method called peek too which just looks at the top value of the stack without modifying the stack.


*/

//Programming is a stack )
function double(x) {
  return 2 * x;
}
function squareAndAddFive(y) {
  return square(y) + 5;
}
function square(z) {
  return z * z;
}

function maths(num) {
  var answer = double(num);
  answer = squareAndAddFive(answer);
  return answer;
}

maths(5);

// Let's examine how JavaScript actually handles this.

// -> maths is called; JS pushes maths call on its call stack
// -> inside maths, double is called; JS pushes double onto its call stack
// -> double completes, returns value 10; JS pops double off its call stack
// -> back inside maths, squareAndAddFive is called;
//    JS pushes squareAndAddFive on its call stack
// -> inside squareAndAddFive, square is called;
//    JS pushes square on its call stack

// Let's look at call stack right now

// square
// squareAndAddFive
// maths
// main

// -> square completes, returns 100
// -> squareAndAddFive completes, returns 105
// -> maths completes, returns 105
