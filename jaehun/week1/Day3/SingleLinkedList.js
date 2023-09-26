class Node {
    constructor(value) {
        this.value = value; // 현재노드 값
        this.next = null; // 다음노드
    }
}

class SingleLinkedList {
    head = null; // head노드
    tail = null; // tail노드

    find(value) {
        let cur = this.head; // 현재 노드 === head
        while (cur.value !== value) {
            // 현재 노드가 아니면
            cur = cur.next; // 다음 노드 탐색
            if (cur === null) {
                // 마지막 노드까지 탐색 완료
                return new Error("해당 노드가 없습니다.");
            }
        }
        return cur;
    }

    append(value) {
        const newNode = new Node(value);
        // head가 없으면
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        // head가 있으면
        else {
            this.tail.next = newNode; // 현재 tail에 다음 노드로 newNode 연결
            this.tail = newNode; // tail 노드를 newNode로 변경
        }
    }

    // node 뒤에 value추가
    insert(node, value) {
        const newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value) {
        let prev = this.head;
        while (prev.next.value !== value) {
            prev = prev.next;
            if (prev.next === null) {
                console.log("제거 할 노드가 없습니다.");
                return new Error("제거 할 노드가 없습니다.");
            }
        }
        if (prev.value !== null) prev.next = prev.next.next; // 해당 값의 다음 값으로 연결
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

const sll = new SingleLinkedList();

sll.append(1);
sll.append(2);
sll.append(3);
sll.append(4);
sll.display();
console.log(sll.find(3));
sll.remove(3);
sll.display();
sll.insert(sll.find(2), 10);
sll.display();

// size
console.log(sll.size());
// 예외처리
console.log(sll.find(100)); // 없는 값 찾기 error
sll.remove(100); // 없는 값 제거 error
