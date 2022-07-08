// WHAT IS A TREE?
// A data structure that consists of nodes in a parent / child relationship
// Lists - linear
// Trees - nonlinear

// TREE TERMINOLOGY
// Root - The top node in a tree.
// Child -A node directly connected to another node when moving away from the Root.
// Parent - The converse notion of a child.
// Siblings -A group of nodes with the same parent.
// Leaf - A node with no children.
// Edge - The connection(arrow) between one node and another.

// Lots of different applications!
// HTML DOM
// Network Routing
// Abstract Syntax Tree
// Artificial Intelligence
// Folders in Operating Systems
// Computer File Systems

// Binary trees are special case of trees where each node can have a maximum of 2 children; 0, 1 or 2
// Binary Search Trees(BSTs) are special case of Binary trees and are sorted in a particular way,
// ensuring that every node's left hand child is less than the parent node's value, and that
// every node's right hand child is greater than the parent

// Big O of BST
// Insertion  -  O(log n)
// Searching  -  O(log n)
// O(log n) :  Double the number of nodes, You only increase the number of steps to insert/find by 1
// 2x number of nodes: 1 extra step
// 4x number of nodes: 2 extra steps
// 8x number of nodes: 3 extra steps
// *NOT guaranteed!


// Tree Traversal - Visit every node once

// Two ways:
// Breadth-first Search (BFS)
// Depth-first Search   (DFS)  -> InOrder, PreOrder and PostOrder

// visit the node, traverse the left and traverse the right
// PreOrder -> visit the node first(i.e, add it to the list), then traverse the entire left and then traverse the entire right (NLR)
// PostOrder -> visit the node after. Traverse the left and the right and then visit the node(i.e, add it to the list) (LRN)
// InOrder -> traverse the entire left side, then visit the node(i.e, add it to the list) and then traverse the entire right (LNR)

// DFS uses a stack (push and pop) and BFS uses a queue(push and shift)