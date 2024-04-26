import React, { useState } from "react";
import "./InputButton.css";
import { useInputValue } from "./Context";

const InputButton = ({ onSearch, errorMessage }) => {
  const { inputValue, setInputValue } = useInputValue();

  const handleSearch = () => {
    onSearch(inputValue);
  };
  
  return (
    <div className="search-bg">
      <div className="search">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="input"
        />
        <button className="btn" id="btn" onClick={handleSearch}> Search </button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default InputButton;
