import React, { useState } from 'react';
import './InputButton.css';
const InputButton = ({ onSearch, errorMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };
  return (
    <div class="search-bg">
      <div class="search">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="input"
        />
        <button class="btn" id="btn" onClick={handleSearch}>
          {' '}
          Search{' '}
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default InputButton;
