class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null; // 부모노드 추가
    }
}

class BinarySearchTree {
    root = null;

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let cur = this.root;
        while (cur !== null) {
            // 현재보다 더 크면 오른쪽에 삽입
            if (cur.value < value) {
                // 오른쪽이 없다면 바로 삽입
                if (cur.right === null) {
                    cur.right = newNode;
                    newNode.parent = cur; // 부모노드 추가
                    break;
                }
                // 오른쪽이 있다면 오른쪽 노드로 이동
                cur = cur.right;
            }
            // 현재보다 더 작거나 같으면 왼쪽에 삽입
            else {
                // 왼쪽이 없다면 바로 삽입
                if (cur.left === null) {
                    cur.left = newNode;
                    newNode.parent = cur; // 부모노드 추가
                    break;
                }
                // 왼쪽이 있다면 왼쪽 노드로 이동
                cur = cur.left;
            }
        }
    }

    has(value) {
        let cur = this.root;
        while (cur !== null) {
            if (cur.value === value) return cur;

            if (cur.value < value) cur = cur.right;
            else cur = cur.left;
        }
        return false;
    }

    remove(value) {
        const target = this.has(value);
        // console.log("target", target);
        let cur = target;
        if (!cur) {
            console.error("찾는 값이 없습니다.");
            return false;
        }

        // leaf 노드인 경우
        if (cur.left === null && cur.right === null) {
            // 삭제할 요소가 부모의 오른쪽 자식일 경우
            if (cur.parent.value < cur.value) cur.parent.right = null;
            // 삭제할 요소가 부모의 왼쪽 자식일 경우
            else cur.parent.left = null;

            return console.log(`${cur.value}삭제 완료`);
        }

        // 하나의 서브트리를 가지는 경우
        else if (cur.left === null || cur.right === null) {
            // 삭제할 요소가 부모의 오른쪽 자식일 경우
            if (cur.parent.value < cur.value)
                cur.parent.right = cur.left === null ? cur.right : cur.left;
            // 삭제할 요소가 부모의 왼쪽 자식일 경우
            else cur.parent.left = cur.left === null ? cur.right : cur.left;
        }

        // 두개의 서브트리를 가지는 경우
        // 1. 삭제할 요소보다 큰 값 중 가장 작은 값(left 요소가 null인 값)을 찾는다.
        // 2. 가장 작은 값의 오른쪽 서브트리가 있다면 가장 마지막 right값으로 삭제할 요소의 rifht와 연결한다
        // 3. 가장 작은 값의 부모요소와 연결을 끊고 삭제할 값의 부모와 연결해준다
        // 4. 가장 작은 값의 left 값으로 삭제할 요소의 left 값을 넣는다
        // 5. 삭제할 요소의 연결은 모두 끊는다
        else {
            // 1.
            cur = cur.right;
            while (cur.left !== null) {
                cur = cur.left;
            }
            // console.log("cur", cur);

            // 2.
            let right = cur.right;

            while (right.right !== null) {
                right = right.right;
            }
            // console.log("right", right);

            right.right = target.right;
            target.right.parent = right;
            // console.log("target.right", target.right);

            // 3.
            cur.parent.left = null;
            cur.parent = target.parent;
            target.parent.right = cur;
            // console.log("cur.parent", cur.parent);

            // 4.
            cur.left = target.left;
            target.left.parent = cur;

            // 검사
            console.log("target", target);
            console.log("target.parent", target.parent);
            console.log("target.left", target.left);
            console.log("target.right", target.right);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(1);
tree.insert(4);
tree.insert(3);
tree.insert(8);
tree.insert(9);
tree.insert(7);
tree.insert(5);
tree.insert(6);
// console.log(tree);
tree.remove(4);
console.log(tree.has(4));
// console.log(tree.has(5));
