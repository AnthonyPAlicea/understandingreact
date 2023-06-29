class LinkedListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new LinkedListNode(val);
    
        // If there is no head yet let's make new node a head.
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
    
          return this;
        }
    
        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;
    
        return this;
    }

    pop() {
        let originalHead = this.head;
        if (this.head) {
            this.head = this.head.next;
        }
        return originalHead ? originalHead.value : null;
    }

    print() {
        let currentNode = this.head;
        while (currentNode) {
          console.log(currentNode.value);
          currentNode = currentNode.next;
        }
    }
}

let myQueue = new Queue();
myQueue.append("Tony");
myQueue.append("Alicea");
myQueue.append("Understanding React");
myQueue.print();
console.log("---")
console.log("Popped value: " + myQueue.pop());
console.log("Popped value: " + myQueue.pop());
myQueue.print();