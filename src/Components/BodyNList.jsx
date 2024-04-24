import React from 'react'
import "./BodyNList.css"

const apiFunction = (input) => {
  fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${input}`)
  .then((response => {
    if(response.status == 200){
      return response.json();
    }
    else{
      throw new Error("Deu ruim pai slcKKKKKKK");
    }
  }))
  .then((datas => {
    console.log(datas);
  }))
}

const BodyNList = ({input}) => {
  apiFunction(input)
  return (
    <div>
        <section class="conteudo">
            <div class="content">
                <div class="content-container">
                    <ul id="list">

                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BodyNList