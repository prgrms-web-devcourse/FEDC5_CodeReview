class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currNode = this.root;
    while(currNode !== null) {
      if (currNode.value < value) {
        if (currNode.right === null) {
          currNode.right = newNode;
          break;
        }

        currNode = currNode.right;
      } else {
        if (currNode.left === null) {
          currNode.left = newNode;
          break;
        }

        currNode = currNode.left;
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // case 1: no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // case 2: one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // case 3: two children
      let minRight = this.findMinNode(node.right);
      node.value = minRight.value;
      node.right = this.removeNode(node.right, minRight.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  has(value) {
    let currNode = this.root;
    while(currNode !== null) {
      if (currNode.value === value) {
        return true;
      }

      if (currNode.value < value) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }

    return false;
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(2);
bst.insert(5);
bst.insert(8);
bst.insert(3);

// Before Remove
console.log('-----------Before Remove-----------\n',bst.root.value); // 5
console.log(bst.root.left.value); // 4
console.log(bst.root.right.value); // 7
console.log(bst.root.left.left.value); // 2
console.log(bst.root.left.right.value); // 5
console.log(bst.root.right.right.value); // 8
console.log(bst.root.left.left.right.value); // 3
console.log('----------------------');

// After Remove
bst.remove(4);

console.log('-----------After Remove-----------\n',bst.root.value); // 5
console.log(bst.root.left.value); // 5
console.log(bst.root.right.value); // 7
console.log(bst.root.left.left.value); // 2
console.log(bst.root.left.left.right.value); // 3
console.log(bst.root.right.right.value); // 8
