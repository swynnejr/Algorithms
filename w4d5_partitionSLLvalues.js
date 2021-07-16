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

    // moveMinToFront() - find the node with the smallest value in the linked
    // list (hmmmm) and make it the head of the list. note that the node itself
    // needs to be moved - you cannot just swap the values of the two nodes!
    // if your linked list looks like this:
    // 8 - 4 - 1 - 2 - 7
    // it should end up looking like this:
    // 1 - 8 - 4 - 2 - 7
    // what if the node is already at the head? what if the linked list is
    // small or empty? be careful!

    moveMinToFront() {
        // console.log(this.display());
        if (this.head == null && this.tail == null) {
          return;
        }
        else if (this.head == this.tail) {
          return;
        }

        var min = this.findMinNode();

        if (this.head == min) {
          return;
        }
        else {
          // Find minNode >
    
          var runner = this.head;
    
          //this is to find the node before the min node >
          while (runner.next != min) {
            runner = runner.next;
          }
          // right here we need to set runner.next to = the node after min node
          runner.next = runner.next.next;
          // Set .next of minNode to this.head
          min.next = this.head;
          this.head = min;
          if (this.head == this.tail) {
            this.tail = runner;
          }
        }
      }

    // moveMaxToBack() - find the node with the largest value in the linked
    // list (...) and make it the tail of the list. 
    // if your linked list looks like this:
    // 1 - 8 - 4 - 2 - 7
    // it should end up looking like this:
    // 1 - 4 - 2 - 7 - 8
    // remember to check for edge cases

    moveMaxToBack() {
        if(this.head==null && this.tail==null){
            return undefined;
        }
        if(this.head==this.tail){
            return "add more nodes dufus"
        }
        var nodeToMove=this.findMaxNode()
        if(this.tail==nodeToMove){
            return "already at the end, Yay!"
        }
        if(nodeToMove==this.head){
            this.head=nodeToMove.next;
            nodeToMove.next=null;
            this.tail.next=nodeToMove;
            this.tail=nodeToMove;
            return "you did it!"
        }
        var runner=this.head;
        while(runner.next!=nodeToMove){
            runner=runner.next;
        }
        runner.next=nodeToMove.next;
        nodeToMove.next=null;
        this.tail.next=nodeToMove;
        this.tail=nodeToMove;
    }



    // partition(target)
    // rearrange the nodes in the list so that all nodes with values less than
    // the target value come first in the list, then all nodes with the target
    // value, then all nodes with values greater than the target value
    // if there are no nodes with values greater or less than the target value,
    // or no nodes with the target value at all, the function should still work
    // if the target is 5, and the list is 8 - 7 - 1 - 5 - 4 - 5 - 2 - 8 - 3
    // the list should rearrange so that the nodes (represented by values)
    // are in this order:
    // 1 - 4 - 2 - 3 - 5 - 5 - 8 - 7 - 8
    // if the target 5, and the list contains:
    // 8 - 1 - 7 - 2 - 4 - 9 - 0 - 1 - 3 - 8
    // the output should be:
    // 1 - 2 - 4 - 0 - 1 - 3 - 8 - 7 - 9 - 8
    // order of nodes does not matter as long as the above rules 
    // for placement are respected
    // remember to fix your head and tail afterwards
    // remember that we cannot just swap node values
    // if you are iterating through the list using a runner and constantly moving
    // nodes to the end, you are likely to get stuck in a loop
    // bonus: can you do it without using an array(s)?
    // other bonus: can you do it without using an array -and- without using
    // another instance(s) of our SinglyLinkedList class?

    // while loop for runner
        // if runner is less than target, move to front
            // if it's not this.tail (create temp var to check)
                    // move to front
                    // add to runner
                // if it is this.tail
                    // move and then break loop
        // if runner is equal to target, leave it alone
            // if runner is this.tail
                // break
            // if not tail
                // add to runner
        // if runner is more than target
            // if it's not this.tail
                // move to back
                // add to runner
            // if it is this.tail
                // move and then break loop


    partition(target) {
        var arr_less = []
        var arr_greater = []
        var arr_equ = []
        var runner = this.head

        if (this.head == null && this.tail == null) {
            return 'empty'}
        while (runner != null) {
            if (runner.value == target){
                arr_equ.push(runner)
            }
            if (runner.value < target) {
                arr_less.push(runner)
            }
            if (runner.value > target) {
                arr_greater.push(runner)
            }
            runner = runner.next;
        }
        // try array.concat?
        // for (var x = 0; x < arr_less.length; x++){
        //     complete_arr.push(arr_less[x])
        // }
        // for (var x = 0; x < arr_equ.length; x++){
        //     complete_arr.push(arr_equ[x])
        // }
        // for (var x = 0; x < arr_greater.length; x++){
        //     complete_arr.push(arr_greater[x])
        // }

        var complete_arr = arr_less.concat(arr_equ, arr_greater);

        for (var x = 0; x < complete_arr.length; x++){
            if( x == complete_arr.length - 1){
                complete_arr[x].next = null
            }
            else{
            complete_arr[x].next = complete_arr[x +1]
        }
        }
        this.head =  complete_arr[0]
        this.tail = complete_arr[complete_arr.length-1]
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


null_list = new SinglyLinkedList();
single_list = generateSLLFromArray([8]);
two_list_a = generateSLLFromArray([1, 10]);
two_list_b = generateSLLFromArray([10, 1]);
three_list_a = generateSLLFromArray([5, 6, 3]);
three_list_b = generateSLLFromArray([2, 5, 6]);
three_list_c = generateSLLFromArray([6, 5, 2]);
random_a = generateNewList(20, -10, 10);
random_b = generateNewList(15, -20, 20);
other_list = generateSLLFromArray([8, 1, 1, 7, 1]);
other_list_b = generateSLLFromArray([8, 1, 1, 5, 8, 7, 1]);

var test_cases = [null_list, single_list, two_list_a, two_list_b, three_list_a, three_list_b, three_list_c, random_a, random_b, other_list, other_list_b];

for (var i = 0; i < test_cases.length; i++) {
    console.log(test_cases[i].display());
    test_cases[i].partition(5);
    console.log(test_cases[i].display());
}




