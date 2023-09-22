class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinedList {
    head = null; // head노드
    tail = null; // tail노드

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
            newNode.next = this.head; // tail 노드의 next head로 변경
        }
    }

    remove(value) {
        let prev = this.head;
        while (prev.next.value !== value) {
            prev = prev.next;
            if (prev.next === this.head) {
                console.log("제거 할 노드가 없습니다.");
                return new Error("제거 할 노드가 없습니다.");
            }
        }
        if (prev.value !== null) prev.next = prev.next.next; // 해당 값의 다음 값으로 연결
    }

    find(value) {
        let cur = this.head; // 현재 노드 === head
        while (cur.value !== value) {
            // 현재 노드가 아니면
            cur = cur.next; // 다음 노드 탐색
            if (cur === this.head) {
                // 마지막 노드까지 탐색 완료
                return new Error("해당 노드가 없습니다.");
            }
        }
        return cur;
    }
    // node 뒤에 value추가
    insert(node, value) {
        const newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;
    }

    size() {
        let node = this.head;
        let cnt = 0;
        while (node !== null) {
            cnt++;
            node = node.next;
            if (node === this.head) break;
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
            if (cur === this.head) break;
        }

        console.log(`[${displayArr.join(", ")}]`);
    }
}

const cll = new CircularLinedList();

cll.append(1);
console.log(cll);
cll.append(2);
console.log(cll);
cll.append(3);
cll.append(4);
cll.display();
console.log(cll.find(3));
cll.remove(3);
cll.display();
cll.insert(cll.find(2), 10);
cll.display();

// size
console.log(cll.size());
// 예외처리
console.log(cll.find(100)); // 없는 값 찾기 error
cll.remove(100); // 없는 값 제거 error
