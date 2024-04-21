import React, { useState } from 'react'
import "./InputButton.css"
const InputButton = ({handleInput}) => {
    
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleClick = () =>
        handleInput(inputValue)

  return (
    <div class="search-bg">
        <div class="search">
            <input type="text" id="input"
                   value={inputValue}
                   onChange={handleChange}
            />
            <button class="btn" id="btn" onClick={handleClick}> Search </button>
            <p class="hidden"></p>
        </div>
    </div>
  )
}

export default InputButton