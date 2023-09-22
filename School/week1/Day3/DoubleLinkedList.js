class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    head = null;
    tail = null;

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    remove(value) {
        let prev = this.head;
        while (prev.next.value !== value) {
            prev = prev.next;
            if (prev.next === null) {
                console.error("해당 값이 없습니다.");
                return;
            }
        }
        if (prev.value !== null) prev.next = prev.next.next;
    }

    find(value) {
        let cur = this.head;
        while (cur.value !== value) {
            cur = cur.next;
            if (cur === null) {
                return new Error("해당 노드가 없습니다.");
            }
        }
        return cur;
    }

    insert(node, value) {
        const newNode = new Node(value);
        newNode.prev = node;
        newNode.next = node.next;
        node.next.prev = newNode;
        node.next = newNode;
    }

    size() {
        let node = this.head;
        let cnt = 0;
        while (node !== null) {
            cnt++;
            node = node.next;
        }
        return cnt;
    }

    display() {
        let cur = this.head;
        if (!cur) return console.error("데이터가 없습니다.");

        let displayArr = [];

        while (cur !== null) {
            displayArr.push(cur.value);
            cur = cur.next;
        }
        console.log(`[${displayArr.join(", ")}]`);
    }
}

const dll = new DoubleLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.display();
console.log(dll.find(3));
dll.remove(3);
dll.display();
dll.insert(dll.find(2), 10);
dll.display();

// size
console.log(dll.size());

// 예외처리
console.log(dll.find(100)); // 없는 값 찾기 error
dll.remove(100); // 없는 값 제거 error
