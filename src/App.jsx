import React, { useState } from 'react';
import Header from './Components/Header';
import BodyNList from './Components/BodyNList';

function App() {
  const [input, setInput] = useState('');

  const handleInput = (msg) => setInput(msg);

  return (
    <>
      <div>
        <Header></Header>
        <BodyNList input={input} handleInput={handleInput}></BodyNList>
        <p>{input}</p>
      </div>
    </>
  );
}

export default App;
