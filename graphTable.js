// WHAT ARE GRAPHS
// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points,
// together with a set of unordered pairs of these vertices for an undirected graph
// or a set of ordered pairs for a directed graph.

// WHAT
// Nodes(verices) + Connections(edges)

// ESSENTIAL GRAPH TERMS
// Vertex - a node
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distanced between vertices

// Tree is a graph in which any two vertices are connected by exactly only one path.

// How do we store/represent a graph ?
// 1. Adjacent Matrix
// 2. Adjacency List
// 3. Edge List


// DIFFERENCES & BIG O OPERATION	ADJACENCY LIST	ADJACENCY MATRIX:
// |V| - number of vertices
// |E| - number of edges

// OPERATION      AdjacencyList    AdjacencyMatrix

// Add Vertex	     O(1)	            ​O(|V^2|)
// Add Edge  	     O(1)	            O(1)
// Remove Vertex   O(|V| + |E|)	    ​O(|V^2|)
// Remove Edge	   O(|E|)           O(1)
// Query       	   O(|V| + |E|)	    O(1)
// Storage	       O(|V| + |E|)	​    O(|V^2|)

// 1. Adjacency List
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge

// 2. Adjacency Matrix
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge

// 3. Edge List
// An edge list is a way to represent a graph
// simply as an unordered list of edges. Assume
// the notation for any triplet (u,v,w) means:
// “the cost from node u to node v is w
// [(C,A,4), (A,C,1),(B,C,6), (A,B,4), (C,B,1), (C,D,2)]
// Space efficient for representing sparse graphs
// Less space efficient for denser graphs.
// Iterating over all edges is efficient Edge weight lookup is O(E)
// Very simple structure

// Graph Traversal - Visiting/Updating/Checking each vertex in a graph
// 1. DEPTH FIRST:    Explore as far as possible down one branch before "backtracking"
// 2. BREADTH FIRST:  Visit neighbors at current depth first!