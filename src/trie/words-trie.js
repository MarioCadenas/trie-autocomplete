import Trie from './trie';
import { WORDS } from './words';

const trie = new Trie();

for (const word of WORDS) {
  trie.insert(word);
}

export default trie;
