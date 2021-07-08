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
    }

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
        this.size++;
    }

    // Get value from index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                current.data;
                console.log("current.data: ", current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // remove node by index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
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
linkedL.insertFirst(300);
linkedL.insertFirst(200);
linkedL.insertFirst(100);
linkedL.insertLast(400);
linkedL.insertAt(600, 0);
linkedL.insertAt(500, 10);
linkedL.insertAt(501, 10);
linkedL.insertAt(502, 10);
linkedL.insertAt(503, 10);
linkedL.insertAt(504, 10);
linkedL.insertAt(505, 10);
linkedL.insertAt(506, 10);
linkedL.getAt(0);

// linkedL.clearList()
// linkedL.removeAt(7);

linkedL.printListData();
