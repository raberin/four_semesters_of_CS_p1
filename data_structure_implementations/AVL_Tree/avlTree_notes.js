/*
AVLs are specialized BSTs. That is to say a valid AVL tree is always a valid BST (but not necessarily vice versa.) When you add a new value to a AVL tree, you do it the same way. The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node. A tree is out of balance if its subtrees' difference of heights is greater than one.

So what's the benefit of all this extra effort? We can now guarantee that we won't hit those bad or worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).

So let's go through the hardest part of AVL trees, the rebalances (actually deletes may be harder but we're not going to do them!) The basic idea is that if one side of tree gets too heavy (ie the max height of one of its children is two more than the max height of the other child) then we need to perform a rotation to get the tree back in balance. Let's take a look at the most basic rotation.


5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
   unbalanced, right heavy, child is right heavy

   - Pseudocode for Right Rotation
-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
   (in this case they're both null)
-> make node A's _original_ left child
   (which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
   /     \
  5        9
node B   node C
                    
This was a right rotation, but a left rotation is mirror of this. This generalized formula works for all but one case which we'll examine now. Even in this special case, all you have to do is perform an extra rotation which you already have the logic for.

5
 \
  8

-> currently valid AVL tree
-> .add called with 7

5 - node A
 \
  8 - node B
 /
7 - node C


(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2,
   unbalanced, right heavy, child is left heavy
                    
Try performing just a straight right rotation. It's not super helpful because you just end up with a still-unbalanced tree.


  8 - node A'
 /
5 - node B'
 \
  7 node C'
                    
That's a problem, right? So now we have to what's called a double rotation. You perform a double rotation when the opposite child is heavy during a rotation. Look at our example (the 5\8/7 example.) We're doing a right rotation but the left child of the right child is heavy (it's not out of balance, it's just heavier than the right child.) So what we're going to do is before we do a left rotation on the right child before we do a right rotation on the root node of the rotation.

PROBLEM -- Root is right heavy, Child is left heavy Double Rotation needed
5 - node A
 \
  8 - node B  -> Do Left Rotation on node B
 /
7 - node C

[ ... previous steps ]
-> check balance of node A: left height is 0, right height is 2
   unbalanced - right heavy, child is left heavy
-> perform left rotation on left heavy right child node B

AFTER Left Rotation on node B it's now a straight line, ready for a Right Rotation
5 - node A
 \
  7 - node B
   \
    8 - node C

-> now perform right rotation on node A

      7 - node A
   /     \
  5        8
node B   node C
                    
That's it! Nailing down the logic of those rotations is a pain but once you do AVL trees are just a series of either left or right rotations on a BST. Even deletes follow this pattern; it's just in deletes sometimes you have to do even more rotations.

NOTES: 
 1. If node is left heavy, do left rotation and vice versa.
 2. Whichever node/child is heavy perform the corresponding rotation.(Heavy: Height of left/right higher than other)
  Left Heavy = left rotation
  Right Heavy = right rotaion

  3a. If root is left heavy with child node being right heavy, perform a double rotation.
    I. Right rotation on child node
    II. Left rotation on root

  3b. If root is right heavy with child node being left heavy, perform a double rotation.
    I. Left rotation on child node
    II. Right rotation on root

    Example of tree needing double rotation
    3b Double Rotation

        5 - node A
        \
          8 - node B  -> Do Left Rotation on node B
        /
        7 - node C
*/
