class SLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.child = null;
    }
}
class SList {
    constructor() {
        this.head = null;
    }

    add(newnode) {

        if (!this.head) {
            this.head = newnode
            return this
        }
        let runner = this.head
        while (runner.next) {
            runner = runner.next
        }
        runner.next = newnode

    }

    reverse() {
        let prev = null
        let runner = this.head
        let next = runner.next
        while (runner.next) {
            runner.next = prev
            prev = runner
            runner = next
            next = runner.next
        }
        this.head = runner
        runner.next = prev
        return this
    }

    print() {
        let runner = this.head
        while (runner.next) {
            console.log(runner)
            runner = runner.next
        }
        console.log(runner)
    }
    // MY PROGRESS: DOESNT WORK
    // flattenChild() {
    //     // Establish runner
    //     let runner = this.head;
    //     // Establish variable for next
    //     let next = runner.next;
    //     // Establish empty stack
    //     var stack = [];
    //     // Runner iterates through the array
    //     while (runner) {
    //         // If there is a child path, it takes the child path
    //         if (this.child == null){
    //             runner = runner.next;
    //         }
    //         else {
    //             // If next.previous is not the runner, move next to the stack
    //             stack.push(runner.next)
    //             runner.next = runner.child;
    //             runner = runner.next;
    //         }
    //     }
    //     // runner iterates through the child

    //     // if runner.next is null, remove the node from the stack, and make it runner.next
    //     // if (runner.next == null) {
    //     //     next = stack.head;
    //     //     runner.next = next;
    //     // }
    // return this
    // }
    flatten(){
        let runner = this.head
        let stack = []
        while(runner){
            if(runner.child){
                stack.push(runner.next)
                runner.next = runner.child
            }else if(!runner.next && stack.length) {
                let next = stack.pop()
                runner.next = next
            }
            runner = runner.next
        }
    }
}

mylist = new SList()
a = new SLNode(1)
mylist.add(a)
b = new SLNode(2)
mylist.add(b)
c = new SLNode(3)
mylist.add(c)
d = new SLNode(4)
b.child = d
e = new SLNode(5)
f = new SLNode(6)
g = new SLNode(7)
d.next = e
e.next = f
f.next = g

mylist.flattenChild()
mylist.print()






