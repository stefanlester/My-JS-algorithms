// What is a linked list?
// A data structure that contains a head, tail and length property.
// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null


// Big O of Singly Linked Lists
// Insertion -  O(1)
// Removal -    It depends.... O(1) or O(N)
// Searching -  O(N)
// Access -     O(N)

class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  
  class SinglyLinkedList {
      constructor() {
        this.head = null
        this.tail = null
        this.length = 0
      }
  
      push(value) {
        const newNode = new Node(value)
  
        // if list is empty
        if(!this.head) {
          this.head = this.tail = newNode
          this.length++
          return this
        }
  
        // there are some existing nodes in the list
        const currentTail = this.tail;
        currentTail.next = newNode
        this.tail = newNode
        this.length++
        return this
      }
    }