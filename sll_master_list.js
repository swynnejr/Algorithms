// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
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
    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
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

    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
    contains(target) {


        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }
    
    // display()
    // return a string with the value of every node from the
    // linked list, head to tail - like "3 - 7 - 13 - 4 - 8"
    display() {
        var output = '';

        var runner = this.head;

        if (runner == null) {
            return 'empty';
        }

        while (runner.next != null) {
            output += runner.value + ' - ';
            runner = runner.next;
        }

        output += runner.value;

        return output;
    }

    // removeFront() - remove the head of the linked list and return its value
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????

    removeFront() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        else {
            var temp = this.head;
            // this.head = temp.next;
            this.head = this.head.next;
            temp.next = null;
            // if (this.head == null) {
            //     this.tail = null;
            // }
            return temp.value;
        }
    }

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?

    removeBack() {

        if (this.head == null && this.tail == null) {
            return undefined;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        else if (this.head.next == this.tail) {
            var temp = this.tail;
            this.head.next = null;
            this.tail = this.head;
            return temp.value;
        }

        else {
            var runner = this.head
            while (runner.next.next != null) { // while( runner.next != this.tail)
                runner = runner.next;
                var temp = runner
            }
            var x = temp.next
            this.tail = temp
            this.tail.next = null
            return x.value
        }
    }

    // findMinNode() - find the node in the linked list with the lowest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find. do not modify the linked list/contents
    // in any way - this is non-destructive.
    // (we want to use this code later - make sure it works well!)

    findMinNode() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }

        var runner = this.head
        var temp = runner
        while (runner != null) {
            if ( temp.value > runner.value ){
                temp = runner
            }
            runner = runner.next;
        }
        return temp;
    }

    // findMaxNode() - find the node in the linked list with the highest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find. do not modify the linked list/contents
    // in any way - this is non-destructive.
    // (again, we want to reuse this code later - make it good!)

    findMaxNode() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }

        var runner = this.head
        var temp = runner
        while (runner != null) {
            if ( temp.value < runner.value ){
                temp = runner
            }
            runner = runner.next;
        
        }
        return temp;
    }

}

function generateNewList(length, min_value, max_value) {
    var generated_sll = new SinglyLinkedList();
    for (let i = 0; i < length; i++) {
        generated_sll.addToFront(
            Math.round(Math.random() * (max_value - min_value) + min_value)
        );
    }
    return generated_sll;
}

// another bonus: a random linked list is good, but being able to make one from
// specific data easily would also be nice. give me a function,
// generateSLLFromArray, that creates a singly linked list with values from
// an array
// input [8, 1, 1, 1, 6] -> (displayed) 8 - 1 - 1 - 1 - 6

function generateSLLFromArray(input) {
    var new_nodelist = new SinglyLinkedList();
    for( var i = 0 ; i < input.length; i++ ){
        new_nodelist.addToBack(input[i])
    }
    return new_nodelist
}


new_sll = generateSLLFromArray([8, 9, 1, 7, 8, 2, -4, 9, 14, 0]);
console.log(new_sll.display());
console.log(new_sll.findMinNode());
console.log(new_sll.findMaxNode());




