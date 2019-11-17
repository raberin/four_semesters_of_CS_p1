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

/*

1. maths(5) is called
2. double(num) runs and completes
3. squareAndAddFive(answer)
4. square()
5. squareAndAddFive completes
6. maths(5) is returned

*/
