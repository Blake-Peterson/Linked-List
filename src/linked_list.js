class LinkedList{

    head = null;
    tail = null;
    size = 0;

    append(value){
        const newNode = new Node(value,)
        if(this.getSize()==0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        } 
        this.size++;
    }

    prepend(value){
        if(this.getSize() ===0){
            head = new Node(value, null);
            this.tail = this.head;
        } else {
            let new_head = new Node(value,null);
            let current = this.head;
            new_head.nextNode = current;
            this.head = new_head;
        }
        this.size++;
    }

    getSize(){
        return this.size;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }

    at(index){
        if(this.getSize()==0){
            return null;
        }
        let current = this.getHead();
        for(let i=0;i<index;i++){
            current = current.nextNode;
        }
        return current.value;
    }

    pop(){
        let current = this.head;
        let index = 0;
        while(current.nextNode != null){
            index++;
            current = current.nextNode;
            if(index+1== this.size){
                current.nextNode = null;
            }
        }
    }

    contains(value){
        let current = this.head.nextNode;
        while(current.nextNode !== null){
            if (current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value){
        let current = this.head.nextNode;
        let index = 0;
        while(current.nextNode != null){
            if (current.value == value){
                return index;
            } else {
                current = current.nextNode;
                index++;
            }
        }
        return null;
    }

    toString(){
      let current = this.head;  
      let linked_string = "";
      while(current.nextNode != null){
        if(current !==null){
            linked_string +=  `( ${current.value} ) -> `;
            current = current.nextNode;
        } 
      }
      linked_string += "null";
      return linked_string;
    }
}

class Node {
    constructor(value, nextNode=null){
        this.value = value;
        this.nextNode = nextNode;
    }
}



const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());