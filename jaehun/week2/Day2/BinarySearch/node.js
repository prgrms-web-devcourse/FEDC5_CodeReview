class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
                    break;
                }
                // 오른쪽이 있다면 오른쪽 노드로 이동
                cur = cur.right;
            }
            // 현재보다 더 작으면 왼쪽에 삽입
            else {
                // 왼쪽이 없다면 바로 삽입
                if (cur.left === null) {
                    cur.left = newNode;
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
            if (cur.value === value) return true;

            if (cur.value < value) cur = cur.right;
            else cur = cur.left;
        }
        return false;
    }

    delete(v) {}
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(8);
tree.insert(1);
tree.insert(10);
tree.insert(9);
tree.insert(2);
console.log(tree);
console.log(tree.has(2));
console.log(tree.has(6));
