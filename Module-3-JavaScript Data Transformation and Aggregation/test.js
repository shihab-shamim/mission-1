// class Stack{
//     constructor(){
//         this.items=[]

//     }
//     push(item){
//         this.items.push(item)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return undefined;
//         }
//         this.items.pop()
//     }
//     peek(){
//          if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items[this.items.length-1]
        
//     }
//     isEmpty(){
//          return this.items.length === 0;

//     }
//     print(){
//         console.log(this.items.slice().reverse().join("-->"));
//     }

// }

// const stack=new Stack()
// stack.push(20)
// stack.push(10)
// stack.push(30)
// stack.pop()
// stack.print()

// console.log(stack);


// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     push(item){
//         this.items.push(item)
//     }
//     pop(){
//         if(this.isEmpty()) return undefined;
//         this.items.shift()

//     }
//         isEmpty(){
//          return this.items.length === 0;

//     }

//     print(){
//         console.log(this.items);
//     }
// }


// const queue=new Queue()
// queue.push(67)
// queue.push(5)
// queue.push(6)
// queue.push(7)
// queue.pop()
// queue.print()


// console.log(queue);



class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
const head=new  Node(10)
head.next=new Node(20)
head.next.next=new Node(30)


let temp=head;

while(temp !== null) {
    console.log(temp.value," ");
    temp=temp.next
}


// console.log(head);