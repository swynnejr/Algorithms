// isPalindrome() - return true if the values of the queue form a palindrome,
// and false otherwise. essentially, if the queue were read tail to head
// instead of head to tail, would we get the same results?
// don't put the values of the queue into an array!
// (or turn them into a string, either - your queue listnode values
// may not always be able to be turned into a string)
// do not modify the queue state in any way
// also don't add some kind of tricky extra queue methods - they're not needed
// maybe... use a stack? you'll need to copy that class into this file
// you ain't gotta tho nbd it's just a suggestion

isPalindrome() {

}

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// where should we add items? where are they removed from

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // enqueue(value) - adds the given value to the queue (at the tail)
    enqueue(value) {
        var new_node = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // push(value) - adds the given value to the stack
    push(value) {
        var new_node = new ListNode(value);
        // if nothing is in the list
        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    

// Create empty stack.

// Iterate through the queue with the runner from head to tail

// Push each node to stack.

// Start the runner in the queue again. Every time runner.next, pop a node from the stack and compare the popped node with the node the runner is on.

// If all nodes matched, then return true, else false.