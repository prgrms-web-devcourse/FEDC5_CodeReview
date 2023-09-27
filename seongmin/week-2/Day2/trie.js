class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(value) {
    let currentNode = this.root;

    for (const char of value) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(value) {
    let currentNode = this.root;

    for (const char of value) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}
