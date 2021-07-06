class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const node1 = new Node(100);
// console.log(node1); // Node { data: 100, next: null }

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node object
    insertFirst = (data) => {
        this.head = new Node(data, this.head);
        this.size++;
    };

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };

    // Insert at index

    insertAt(data, index) {
        // if index is out of range
        if (index > 0 && index > this.size) {
            return this.insertLast(data); // if the index is out of range, add it to the end
        }

        // if it's the first index, make it the head.
        if (index === 0) {
            return this.insertFirst(data);
        }

        const node = new Node(data);
        let current;
        let previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // node before index
            count++;
            current = current.next; // node after index
        }

        node.next = current;
        previous.next = node;
        this.size++
    }

    // Get value from index
    getAt(index) {
        let current = this.head;
        let count = 0

        while(current) {
            if(count == index){
                console.log("current.data: ", current.data)
            }
            count++
            current = current.next;
        }
        return null

    }








    // Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedL = new LinkedList();
linkedL.insertFirst(100);
linkedL.insertFirst(200);
linkedL.insertFirst(300);
linkedL.insertLast(400);
linkedL.insertAt(600, 0);
linkedL.insertAt(500, 10);
linkedL.getAt(0)


linkedL.printListData();
