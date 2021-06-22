import React, { useState } from 'react';
import Trie from './trie';
import './style.css';

const trie = new Trie();

trie.insert('foo');

export default function App() {
  console.log(trie);
  return (
    <div>
      <h1>Insert text to see autocomplete</h1>
      <input value={} />
    </div>
  );
}
