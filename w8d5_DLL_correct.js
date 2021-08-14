class DList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value){
        const newNode = new DNode(value)
        if (!this.length){
            this.head= newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return newNode;
    }
    reverse(){
        //your code here
        let prev = null
        let runner = this.head
        let next = runner.next
        while(runner.next){
            runner.next = prev
            runner.prev = next
            prev = runner
            runner = next
            next = runner.next
        }
        this.tail= this.head
        this.head = runner
        runner.prev= next
        runner.next = prev
        return this
    }
}
class DNode{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }

    
}
const newDLL= new DList();
console.log(newDLL);
console.log("hey")
newDLL.push("new node 1");
newDLL.push("new node 2");
newDLL.push("new node 3");
console.log(newDLL);
console.log("hey")
newDLL.reverse()
console.log(newDLL)