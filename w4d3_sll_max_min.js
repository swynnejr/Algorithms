
finMaxNode() {
    // establish a runner as a node to iterate through the thread
    var runner = this.head;
    // establish a variable to hold the node that is the max node
    var temp = this.head;
    // establish a while loop that runs as long as the runner is on a node
    while (runner != null) {
        // if the runner is on a node that is not the max, we can just move on
        if (runner.value <= temp.value) {
            runner = runner.next;
        }
        // when the runner is on a node that is the max node, store that node in our temp variable
            else {
                temp = runner;
                // after storing that max node in temp, the runner moves on to check the next node
                runner = runner.next;
            }
        }
    // return the max node after the runner finishes the node
    return temp
}