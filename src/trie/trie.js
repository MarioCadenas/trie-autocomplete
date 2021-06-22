import TrieNode from './trie-node';

export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  autocomplete(word) {
    const currentNode = this.search(word);

    if (!currentNode) {
      return null;
    }

    return this.collectAllWords(currentNode);
  }

  collectAllWords(node = null, word = '', words = []) {
    const currentNode = node ?? this.root;

    for (const [key, childNode] of currentNode.children.entries()) {
      if (key === '*') {
        words.push(word);
      } else {
        this.collectAllWords(childNode, word + key, words);
      }
    }

    return words;
  }

  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children.has(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        const newNode = new TrieNode();
        currentNode.children.set(char, newNode);
        currentNode = newNode;
      }
    }

    currentNode.children.set('*', null);
  }

  search(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children.has(char)) {
        currentNode = currentNode.children.get(char);
      }
    }

    return currentNode;
  }
}
