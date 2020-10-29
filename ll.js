class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // methods
    insertFirst(value) {
        this.head = new _Node(value, this.head);
    }

    insertLast(value) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(value, null);
        }
    }

    insertBefore(value, key) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let prevNode = this.head;
            let tempNode = this.head;
            while (tempNode.value !== key) {
                prevNode = tempNode;
                tempNode = tempNode.next;
            }
            prevNode.next = new _Node(value, tempNode);
        }
    }

    insertAfter(value, key) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let tempNode = this.head;
            let nextNode = tempNode.next;
            while (tempNode.value !== key) {
                tempNode = tempNode.next;
                nextNode = tempNode.next;
            }
            tempNode.next = new _Node(value, nextNode);
        }
    }

    insertAt(value, insertAt) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let prevNode = this.head;
            let currNode = this.head;
            while ((currNode !== null) && insertAt > 0) {
                prevNode = currNode;
                currNode = currNode.next;
                insertAt--;
            }
            prevNode.next = new _Node(value, currNode);
        }
    }

    remove(value) {
        if (this.head === null) {
            return 'LL empty';
        } else {
            let prevNode = this.head;
            let currNode = this.head;
            while (currNode.value !== value) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = currNode.next;
        }
    }

    find(value) {
        if (this.head === null) {
            return 'LL Empty';
        } else {
            let tempNode = this.head;
            while (tempNode.value !== value) {
                tempNode = tempNode.next;
            }
            return tempNode;
        }
    }

    findLength() {
        let count = 0;
        let tempNode = this.head;
        while (tempNode !== null) {
            tempNode = tempNode.next;
            count++;
        }
        return count;
    }

    display() {
        let tempNode = this.head;
        while (tempNode !== null) {
            console.log(tempNode);
            tempNode = tempNode.next;
        }
        return null;
    }

    findPrevious(value) {
        if (this.head === null) {
            return 'LL Empty';
        } else {
            let prevNode = this.head;
            let tempNode = this.head;
            while (tempNode.value !== value) {
                prevNode = tempNode;
                tempNode = tempNode.next;
            }
            return prevNode;
        }
    }

    findLast() {
        if (this.head === null) {
            return 'LL empty';
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            return tempNode;
        }
    }

    isEmpty() {
        return this.head === null;
    }

    findAndRemoveLast() {
        if (this.head === null) {
            return;
        } else {
            let prevNode = this.head;
            let currNode = this.head;
            while (currNode.next !== null) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = null;
            return currNode;
        }
    }
}



function main() {
    console.log(SLL.isEmpty());
    console.log(SLL.display());
    console.log(SLL.findLength());
    console.log(SLL.find('Husker'));
    console.log(SLL.findLast());
    console.log(SLL.isEmpty());
}

const SLL = new LinkedList();
SLL.insertFirst('Apollo');
SLL.insertLast('Boomer');
SLL.insertAfter('Helo', 'Boomer');
SLL.insertAt('Husker', 2);
SLL.insertAt('Starbuck', SLL.findLength());
// 1 - 3
// main();


// 4
// deletes duplicates
// polynomial time complexity

// 5 Reverse a linked list 
function reverseSLL(root) {
    let prev = null;
    let curr = root.head;
    let next = null;
    while (curr !== null) {
        // store next
        next = curr.next;

        // reverse current node's pointer
        curr.next = prev;

        // move pointers one position ahead
        prev = curr;
        curr = next;
    }
    root.head = prev;
    return root;

}

// console.log(SLL.display());
// console.log('==========================')
// console.log(reverseSLL(SLL));
// console.log('==========================')
// console.log(SLL.display());

function thirdFromTheEnd(sll) {
    let curr = sll.head, prev1 = sll.head, prev2 = sll.head, prev3 = sll.head;

    while (curr.next !== null) {
        prev3 = prev2;
        prev2 = prev1;
        prev1 = curr;
        curr = curr.next;
    }
    return prev2;
}

// console.log(thirdFromTheEnd(SLL));

// 7 find middle
// two pointers, one slow one fast
// move first by one, move second by two
// when second reaches end, return first one
function findMiddle(sll) {
    if (sll.head === null) {
        return null;
    } else {
        let slowPointer = sll.head;
        let fastPointer = sll.head;
        while (fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        return slowPointer;
    }
}
// console.log(findMiddle(SLL));



// 8 cycle in a list
// 0 > 1 > 2 > 3 > 1 > 2 > 3 ...
// push values into an array,
// compare arr.includes(ll.value)
// if no ll.next values are null, ever, it's a loop
function findCycle(sll) {
    if (sll.head === null) {
        return false;
    } else {
        const arr = [];
        let tempNode = sll.head;
        while (tempNode !== null) {
            if (!arr.includes(tempNode.value)) {
                arr.push(tempNode.value);
                tempNode = tempNode.next;
            } else {
                return true;
            }
        }
        return false;
    }
}
// console.log(findCycle(SLL));

class _NodeDLL {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(value) {
        const newNode = new _NodeDLL(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return false;
        }
        const popped = this.tail;
        const newTail = this.tail.prev;
        if (newTail) {
            newTail.next = null;
            this.tail.prev = null;
        } else {
            this.head = null;
        }

        this.tail = newTail;
        this.length--;
        return popped;
    }

    shift() {
        if (!this.head) {
            return false;
        }
        const shiftedNode = this.head;
        const newHead = this.head.next;

        if (newHead) {
            newHead.prev = null;
            shiftedNode.next = null;
        } else {
            this.tail = null;
        }

        this.head = newHead;
        this.length--;
        return shiftedNode;
    }

    unshift(value) {
        const newNode = new _NodeDLL(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    insertAtIndex(value, index) {
        if (index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const newNode = new _NodeDLL(value);
            const after = this.findAtIndex(index);// index
            const before = after.prev;// after.prev
            after.prev = newNode;
            before.next = newNode;
            newNode.next = after;
            newNode.prev = before;
            this.length++;
        }
        return this;
    }

    findAtIndex(index) {
        if (index >= this.length || index < 0) {
            return false;
        }
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    removeAtIndex(index) {
        let removedNode;
        if (index >= this.length || index < 0 ) {
            return false;
        }
        if (index === 0) {
            removedNode = this.shift();
        } else if (index === this.length - 1) {
            removedNode = this.pop();
        } else {
            removedNode = this.findAtIndex(index);
            const after = removedNode.next;
            const before = removedNode.prev;
            // remove references
            removedNode.next = null;
            removedNode.prev = null;
            before.next = after;
            after.prev = before;
            this.length--;
        }
        return removedNode;
    }

    printList() {
        if (this.head) {
            let current = this.head;
            while (current.next) {
                console.log(current.value);
                current = current.next;
            }
            console.log(current.value);
        }
    }


}

const DLL2 = new DLL();
DLL2.push('Aquaria');
DLL2.push('Caprica');
DLL2.unshift('Gemenon');
// DLL2.removeAtIndex(1);
DLL2.insertAtIndex('Picon', 2);
DLL2.printList();

function main2() {
    console.log(DLL2);
}
main2();

// 11
// same as earlier, just switch head and tail, as well
// ah you also have to reverse the prev and next pointers

