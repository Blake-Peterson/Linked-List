class LinkedList{

    head = null;
    tail = null;
    size = 0;

    append(value){
        if(size==0){
            head = new Node(value, null);
        }
        
        if(this.tail===null && this.head==null){
          let new_node = new Node(value,null);
          this.head.value = value;
        } 
        size++;
    }

    prepend(value){
        if(size==0){
            head = new Node(value, null);
        } else {
            let new_head = new Node(value,null);
            current = this.head;
            new_head.nextNode = current;
            this.head = new_head;
        }
        this.size++;
    }

    get size(){
        return this.size;
    }

    get head(){
        return this.head;
    }

    get tail(){
        return this.tail;
    }

    at(index){
        if(size==0){
            return null;
        }
        let current = this.head;
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
        while(current.nextNode != null){
            if (current.value == value){
                return true;
            }
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
                index++;
            }
        }
        return null;
    }

    toString(){
      let current = this.head;  
      let linked_string = "";
      while(current.nextNode != null){
        if(current.value !=null){
            linked_string +=  "( "+ value +" ) -> ";
            current = current.nextNode;
        } else{
            linked_string += "null";
        }
      }
      return linked_string;
    }
}

class Node {
    constructor(value, nextNode){
        this.value = null;
        this.nextNode = null;
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