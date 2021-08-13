class DList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}
class DNode{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    // push - adds a node with the given value to the tail of the list
    push(val) {
        var new_node = new DNode(val);

        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            new_node.prev = this.tail;
            this.tail = new_node;
        }
    }
    // removes pointers to the last node on the DLL, and returns its value
    pop() {

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
            // This is only triggered when runner gets close to the end
            var last = temp.next
            this.tail = temp
            this.tail.next = null
            return last.value
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
    // returns the number of nodes in a DLL
    size(){
        var runner = this.head;
        var counter = 1;
        while (runner != null) {
            runner = runner.next;
            counter += 1;
        }
        return counter;
    }
    front(){
        return this.head;
    }
    back(){
        return this.tail;
    }

    // THESE DONT WORK, AND CHRIS DIDNT TEACH US

    isValid(){
        var runner = this.head;
        // var next = runner.next;
        // var previous = null;
        if (this.head.prev != null && this.tail.next != null){
            return false;
        }
        while (runner.next != null) {
            // previous = runner.prev;
            // next.prev = runner;
            // previous.next = runner;
            if (runner.next.prev != runner) {
                return false;
            }
            runner = runner.next;
        }
        return true
    }

    reverseDList(){
        var runner = this.head;
        // var runner2 = this.tail;
        var next = runner.next;
        var previous = null;
        while (runner.next != null) {
            previous = runner.prev;
            next.prev = runner;
            previous.next = runner;
            if (runner.next.prev != runner) {
                return false;
            }
            runner = runner.next;
        }


    }

}