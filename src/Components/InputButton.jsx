import React from 'react'

const InputButton = () => {
  return (
    <div>
        <div>
            <input type="text" id="input" />
            <button class="btn" id="btn"> Search </button>
            <p class="hidden"></p>
        </div>
    </div>
  )
}

export default InputButton