class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    root = new Node();

    insert(string) {
        let cur = this.root;

        for (const char of string) {
            if (!cur.children.has(char)) {
                cur.children.set(char, new Node(cur.value + char));
            }
            cur = cur.children.get(char);
        }
    }

    has(string) {
        let cur = this.root;
        for (const char of string) {
            if (!cur.children.has(char)) return false;
            cur = cur.children.get(char);
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log("trie:", trie);
console.log("trie.root:", trie.root);
console.log("trie.root.children:", trie.root.children);
console.log("c:", trie.root.children.get("c"));
console.log("ca:", trie.root.children.get("c").children.get("a"));
console.log("cat:", trie.root.children.get("c").children.get("a").children.get("t"));
console.log("can:", trie.root.children.get("c").children.get("a").children.get("n"));

console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));
