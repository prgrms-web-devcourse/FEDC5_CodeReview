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
            if (cur.value < value) {
                if (cur.right === null) {
                    cur.right = newNode;
                    break;
                }
                cur = cur.right;
            } else {
                if (cur.left === null) {
                    cur.left = newNode;
                    break;
                }
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
