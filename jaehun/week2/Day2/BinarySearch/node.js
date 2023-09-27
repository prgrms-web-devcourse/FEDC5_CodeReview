/** [DAY 6] 트리를 이용하여 전위 순회, 중위 순회, 후위 순회를 구현
 * 1. 전위 순회 : root -> left -> right 순으로 순회
 * 2. 중위 순회 : left -> root -> right 순으로 순회
 * 3. 후위 순회 : left -> right -> root 순으로 순회
 */

class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root = null;
    size = 0;

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            this.size++;
            return;
        }

        let cur = this.root;
        while (cur) {
            // value 현재 노드value보다 클 경우 오른쪽에 추가
            if (cur.value < value) {
                if (!cur.right) {
                    cur.right = newNode;
                    newNode.parent = cur;
                    break;
                }
                cur = cur.right;
            }
            // value 현재 노드value보다 작을 경우 왼쪽에 추가
            else {
                if (!cur.left) {
                    cur.left = newNode;
                    newNode.parent = cur;
                    break;
                }
                cur = cur.left;
            }
        }
        this.size++;
    }

    find(value) {
        if (!this.root) {
            return new Error("트리가 비어있습니다.");
        }

        let curNode = this.root;
        while (curNode) {
            // value 찾음
            if (curNode.value === value) {
                return curNode;
            }
            // value 현재 노드value보다 클 경우 오른쪽에서 탐색, 작으면 왼쪽에서 탐색
            curNode = curNode.value < value ? curNode.right : curNode.left;
        }

        return new Error("트리에 찾는 값이 없습니다.");
    }

    remove(value) {
        const targetNode = this.find(value);

        // 삭제 할 노드가 없음
        if (!targetNode) return new Error("트리에 삭제할 값이 없습니다.");

        this.size--;
        // case1. 자식노드 0개
        if (!targetNode.left && !targetNode.right) {
            targetNode.parent.value < targetNode.value
                ? (targetNode.parent.right = null)
                : (targetNode.parent.left = null);
            return console.log(`${targetNode.value}노드 삭제 성공`);
        }

        // case2. 자식노드 1개
        else if (!targetNode.left) {
            // 왼쪽이 없다면
            targetNode.right.parent = targetNode.parent;
            targetNode.parent.right = targetNode.right;
            return console.log(`${targetNode.value}노드 삭제 성공`);
        } else if (!targetNode.right) {
            // 오른쪽이 없다면
            targetNode.left.parent = targetNode.parent;
            targetNode.parent.left = targetNode.left;
            return console.log(`${targetNode.value}노드 삭제 성공`);
        }

        // case2. 자식노드 2개
        else {
            // target보다 큰 값 중 가장 작은 값과 교체
            let minValue = targetNode.right;

            while (minValue.left) minValue = minValue.left;

            // minValue의 right 값이 있다면 => minValue의 parent와 연결
            if (minValue.right) {
                minValue.parent.left = minValue.right;
                minValue.right.parent = minValue.parent;
            } else {
                minValue.parent.left = null;
            }
            // minValue에 연결되어있던 노드 제거

            // targetNode에 연결되어있던 노드 => minValue로 연결
            minValue.parent = targetNode.parent;
            targetNode.parent.right = minValue;

            minValue.left = targetNode.left;
            targetNode.left.parent = minValue;

            minValue.right = targetNode.right;
            targetNode.right.parent = minValue;

            return console.log(`${targetNode.value}노드 삭제 성공`);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(0);
bst.insert(2);
bst.insert(1);
bst.insert(8);
bst.insert(9);
bst.insert(6);
bst.insert(7);
bst.insert(3);
bst.insert(4);
bst.insert(5);
console.log("size:", bst.size);

console.log(bst.root.value);
console.log(bst.root.right.value);
console.log(bst.root.right.parent.value);
console.log(bst.root.right.left.value);
console.log(bst.root.right.right.value);
console.log(bst.root.right.right.left.value);
console.log(bst.root.right.right.left.left.value);
console.log(bst.root.right.right.left.left.right.value);
console.log(bst.root.right.right.left.left.right.right.value);
bst.remove(2);
console.log("size:", bst.size);

console.log(bst.root.value);
console.log(bst.root.right.value);
console.log(bst.root.right.parent.value);
console.log(bst.root.right.left.value);
console.log(bst.root.right.right.value);
console.log(bst.root.right.right.left.value);
console.log(bst.root.right.right.left.left.value);

module.exports = BinarySearchTree;
