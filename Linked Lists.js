
class Node {
    constructor(data, nextNode) {
        this.data = data;
        this.nextNode = nextNode || null;
    }
}

// const node1 = new Node(100);
// console.log(node1); // Node { data: 100, nextNode: null }

class LinkedList {
    constructor() {
        this.headNode = null;
        this.size = 0;
    }

    // Add first node object

    addFirstNode = (data) => {
        this.headNode = new Node(data, this.headNode);
        this.size++;
    };

    addLastNode = (data) => {
        let node = new Node(data);
        let currentNode;

        if (!this.headNode) {
            this.headNode = node;
        } else {
            currentNode = this.headNode;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
        this.size++;
    }

    // Insert at index
    insertNodeAt = (data, index) => {
        // if index is out of range
        if (index > 0 && index > this.size) {
            return this.addLastNode(data); // if the index is out of range, add it to the end
        }

        // if it's the first index, make it the headNode.
        if (index === 0) {
            return this.addFirstNode(data);
        }

        const node = new Node(data);
        let currentNode;
        let previous;

        currentNode = this.headNode;
        let count = 0;

        while (count < index) {
            previous = currentNode; // node before index
            count++;
            currentNode = currentNode.nextNode; // node after index
        }

        node.nextNode = currentNode;
        previous.nextNode = node;
        this.size++;
    }

    // Get value from index
    getNodeAt = (index) => {
        let currentNode = this.headNode;
        let count = 0;

        while (currentNode) {
            if (count == index) {
                currentNode.data;
                console.log("currentNode.data: ", currentNode.data);
            }
            count++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    // remove node by index
    removeNodeFrom = (index) => {
        if (index > 0 && index > this.size) {
            return;
        }
        let currentNode = this.headNode;
        let previous;
        let count = 0;

        if (index == 0) {
            this.headNode = currentNode.nextNode;
        } else {
            while (count < index) {
                count++;
                previous = currentNode;
                currentNode = currentNode.nextNode;
            }
            previous.nextNode = currentNode.nextNode;
        }
        this.size--;
    }

    // remove the first node of the list
    removeFirstNode() {
        let currentNode = this.headNode;
        this.headNode = currentNode.nextNode;
    }

    // remove the last node of the list
    removeLastNode() {
        let currentNode = this.headNode;

        if (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        } else {
            currentNode = currentNode.nextNode;
        }
    }

    clearList() {
        this.headNode = null;
        this.size = 0;
    }

    // Print list data
    
    printListData() {
        let currentNode = this.headNode;
        while (currentNode) {

            console.log(currentNode.data);
            console.log(currentNode.nextNode);
            console.log(linkedListExample.size);

            currentNode = currentNode.nextNode;
        }
    }


}

const linkedListExample = new LinkedList();
linkedListExample.addFirstNode(300);
linkedListExample.addFirstNode(200);
linkedListExample.addFirstNode(100);

linkedListExample.addLastNode(400);

// linkedListExample.insertNodeAt(600, 0);
// linkedListExample.insertNodeAt(500, 10);
// linkedListExample.insertNodeAt(501, 10);
// linkedListExample.insertNodeAt(502, 10);
// linkedListExample.insertNodeAt(503, 10);
// linkedListExample.insertNodeAt(504, 10);
// linkedListExample.insertNodeAt(505, 10);
// linkedListExample.insertNodeAt(506, 10);
// linkedListExample.getNodeAt(0);
// linkedListExample.removeFirstNode();
// linkedListExample.insertNodeAt(600, 11);
// linkedListExample.removeLastNode();

// linkedListExample.clearList()
// linkedListExample.removeNodeFrom(7);

linkedListExample.printListData();
