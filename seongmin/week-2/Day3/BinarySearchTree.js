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
    if (this.has(value)) return;

    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;

      return;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;

          break;
        }

        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;

          break;
        }

        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }

  findMinNode(node) {
    let currentNode = node;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  changeNode(current, parent, node) {
    if (current === this.root) this.root = null;
    else if (parent.left === current) parent.left = node;
    else parent.right = node;
  }

  delete(value) {
    let parentNode = null;
    let currentNode = this.root;

    while (currentNode !== null && currentNode.value !== value) {
      parentNode = currentNode;

      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }

    if (!currentNode) return console.log('찾는 값이 없습니다.');

    // Case 1. 삭제하고자 하는 값이 리프노드인 경우
    if (currentNode.left === null && currentNode.right === null) {
      this.changeNode(currentNode, parentNode, null);
    }
    // Case 2. 삭제하고자 하는 값에 자식 노드가 두 개 있는 경우
    else if (currentNode.left !== null && currentNode.right !== null) {
      const candidate = this.findMinNode(currentNode.right);

      const copiedValue = candidate.value;
      this.delete(candidate.value);

      currentNode.value = copiedValue;
    }
    // Case 3. 삭제하고자 하는 값에 자식 노드가 하나 있는 경우
    else {
      const child =
        currentNode.left !== null ? currentNode.left : currentNode.right;

      this.changeNode(currentNode, parentNode, child);
    }
  }

  preorder(node, arr = []) {
    if (node) {
      arr.push(node.value);

      this.preorder(node.left, arr);
      this.preorder(node.right, arr);
    }

    return arr;
  }

  inorder(node, arr = []) {
    if (node) {
      this.inorder(node.left, arr);

      arr.push(node.value);

      this.inorder(node.right, arr);
    }

    return arr;
  }

  postorder(node, arr = []) {
    if (node) {
      this.postorder(node.left, arr);
      this.postorder(node.right, arr);

      arr.push(node.value);
    }

    return arr;
  }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(59);
bst.insert(23);
bst.insert(84);
bst.insert(62);
bst.insert(95);
bst.insert(26);
bst.insert(15);
bst.insert(56);
bst.insert(67);
bst.insert(68);
bst.insert(38);
bst.insert(90);
bst.insert(36);
bst.insert(13);
bst.insert(47);
bst.insert(26);
bst.insert(39);
bst.insert(5);

bst.delete(59);

console.log(bst.inorder(bst.root));
