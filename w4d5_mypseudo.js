moveMinToFront() {
    //Checks for nodes
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


//Function will need the parameter of target value to divide our node around
//Numbers below target value end up at the front, numbers above target value end up at the back
//Target value nodes become median nodes


rearrangeNode(target) {
    //Checks for nodes existing
    if (this.head == null && this.tail == null) {
        return;
    }
    //Checks to see if it has more than one node
    else if (this.head == this.tail) {
        return;
    }
//Establish a runner at the head and have it iterate through our SLL

// Create if statement to govern runners actions to move through the list twice (or maybe three times?)

//First pass
// If node is greater than target, runner sends node to the front, and makes it the head


//Second pass
// If node is equal to value, runner sends node to the front, and makes it the head

//Third pass
//If node is less than value, runner sends node to the front, and makes it the head


