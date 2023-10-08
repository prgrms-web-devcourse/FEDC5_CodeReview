class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currNode = this.root;

    for (const ch of string) {
      if (!currNode.children.has(ch)) {
        currNode.children.set(ch, new Node(currNode.value + ch));
      }

      currNode = currNode.children.get(ch);
    }
    currNode.isEndOfWord = true;
  }

  has(string) {
    let currNode = this.root;

    for (const ch of string) {
      if (!currNode.children.get(ch)) return false;

      currNode = currNode.children.get(ch);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert('string');
trie.insert('str')
trie.insert('stress')
trie.insert('star')
trie.insert('singer')
trie.insert('sign')
trie.insert('starbucks')
trie.insert('starcraft')
trie.insert('south')
trie.insert('southafrica')
trie.insert('southkorea')
trie.insert('south korea')
trie.insert('south india')