import React, { useState, useEffect } from 'react';
import trie from './trie';
import './style.css';

export default function App() {
  const [value, setValue] = useState('');

  const onChangeInput = evt => setValue(evt.target.value);
  const autoCompleteResults = trie.autocomplete(value);

  return (
    <div>
      <h2>Insert text to see autocomplete</h2>
      <input value={value} onChange={onChangeInput} />
      {value && (
        <ul>
          {autoCompleteResults.filter(Boolean).map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
