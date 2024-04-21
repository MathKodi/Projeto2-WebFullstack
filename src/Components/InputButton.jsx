import React from 'react'

const InputButton = () => {
  return (
    <div class="search-bg">
        <div class="search">
            <input type="text" id="input" />
            <button class="btn" id="btn"> Search </button>
            <p class="hidden"></p>
        </div>
    </div>
  )
}

export default InputButton