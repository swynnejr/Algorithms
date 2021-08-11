class SLNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class SList{
    constructor(){
        this.head = null
    }

    add(newnode){
        if(!this.head){
            this.head = newnode
            return this
        }
        let runner = this.head
        while(runner.next){
            runner = runner.next
        }
        runner.next = newnode

    }

    loop(){
        var fast_runner = this.head.next
        var runner = this.head
        while(runner.next){
            if(runner == fast_runner){
                return true
            }
            runner = runner.next
            fast_runner = fast_runner.next.next

        }
        return false
    }

    removeLoop() {
        // Doesn't work 
        var fast_runner = this.head.next
        var runner = this.head
        while(runner.next){
            if(runner == fast_runner){
                runner.next = null
            }
            runner = runner.next
            fast_runner = fast_runner.next.next

        }
        return false
    }

    print(){
        let runner = this.head
        while(runner.next){
            console.log(runner)
            runner = runner.next
        }
        console.log(runner)
    }
    // hasLoop(mylist){
    //     // My logic DOESNT WORK
    //     // establish a runner
    //     let runner = this.head;
    //     // // Establish var for cookie
    //     // let cookie = []
    //     // // Establish previous variable
    //     // let prev = null;
    //     // while (runner.next) {
    //     //     prev = runner
    //     //     runner = runner.next
    //     // }
    //     // // Runner leaves cookie in cookie jar
    //     // cookie.push(prev)
    //     // // If runner == cookie return TRUE
    //     // if (runner )
    //     // // If runner.next == null return FALSE
    //     while (runner != null){
    //         if (mylist)
    //     }
    // }



}

mylist = new SList()
a = new SLNode(1)
mylist.add(a)
b = new SLNode(2)
mylist.add(b)
c = new SLNode(3)
mylist.add(c)
d = new SLNode(4)
mylist.add(d)
e = new SLNode(5)
mylist.add(e)
f = new SLNode(6)
mylist.add(f)

f.next = c


console.log(mylist.loop())
// mylist.removeLoop()
// mylist.print()