class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkList{
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0
        
    }
    append(value){
        const newNode=new Node(value)
        if(this.head === null){
            this.head=newNode
            this.tail=newNode
        }
        else{
            // if the linked list is not empty
            this.tail.next=newNode
            this.tail=newNode

        }
        this.length++;
 return this
    }

    prepend(value){
         const newNode=new Node(value)
        if(this.head === null){
            this.head=newNode
            this.tail=newNode
        }
        else{
            // if the linked list is not empty
            // this.tail.next=newNode
            // this.tail=newNode
            newNode.next=this.head
            this.head=newNode


        }
        this.length++;
  return this


    }
    insert(index,value){
         
        if(index<0 || index>this.length){
            console.error("Index out of bound :");
            return undefined
        }
        // if the insert in the start of linked list 
        if(index === 0){
           return this.prepend(value)

        }
         // if the insert in the end of linked list 
        if(index ===this.length){
            return this.append(value)

        }
         // if the insert in the middle of linked list 

        //  fine the leading node
       
        const leadingNode=this._traverseToIndex(index-1)
      
        const holdingNode=leadingNode.next;
        const newNode=new Node(value)
        leadingNode.next=newNode
        newNode.next = holdingNode
        this.length++
    }
    remove(index){
        if(index===0){
            const removeItem=this.head.value
            this.head=this.head.next
            if(this.length ===1){
                this.tail=null
            }
            this.length--;
            return removeItem
        }

     const leadingNode = this._traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;

  
        if(leadingNode.next ===null){
            this.tail=leadingNode
        }
        return nodeToRemove.value





    }

    // private helper methods
    _traverseToIndex(index){
         let count =0

        let currentNode=this.head;
        while(count !==index){
            currentNode =currentNode.next
            count++

        }
        // console.log(currentNode);
        return currentNode

    }

    print(){
          const arr=[]
        let currentNode=this.head
        while(currentNode !==null){

            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr.join("-->"),"-->null");
        
    }

}

const linklist=new LinkList()
// linklist.append(10)
linklist.append(1).append(2).append(3)
// linklist.append(2)
// linklist.append(3)
// linklist.prepend(10)
// linklist.insert(3,50)
linklist.remove(3)
// linklist.remove()
// console.log(node);
linklist.print()
// console.log(linklist);
// console.log(linklist);

