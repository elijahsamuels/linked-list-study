class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const node1 = new Node(100);
console.log(node1); // Node { data: 100, next: null }

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

    insertLast = (data) => {
        let node = new Node(data);
        let current;

        if (this.head = null) {
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
linkedL.insertLast(301);

linkedL.printListData();
