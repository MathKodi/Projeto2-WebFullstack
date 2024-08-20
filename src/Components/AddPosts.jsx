import React, { useState} from 'react'

const AddPosts = ({onSearch}) => {
    const [name, setName] = useState("")
    const [commonPlaces, setCommonplaces] = useState("")
    const [description, setDescription] = useState("")
    const [drops, setDrops] = useState("")
    const [image, setImage] = useState("")

    const handleSearch =  () => {
         onSearch(name);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const post = {
          name: name,
          commonPlaces: commonPlaces,
          description: description,
          drops: drops,
          image: image  
        };
    
        try {
          const response = await fetch('http://localhost:3000/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            handleSearch()
          } else {
            const errors = await response.json();
          }
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
        <form onSubmit={(e) => {
            handleSubmit(e);
        }}>
        <label>
              <span>Name:</span>
              <input onChange={(e) => setName(e.target.value)}>
              </input>
            </label>
        <label>
            <span>Lugares comuns</span>
            <input type='text' onChange={(e) => setCommonplaces(e.target.value)}>
            </input>
        </label>
        <label>
            <span>Descrição</span>
            <input type='text' onChange={(e) => setDescription(e.target.value)}>
            </input>
        </label>
        <label>
            <span>Drops</span>
            <input type='text' onChange={(e) => setDrops(e.target.value)}>
            </input>
        </label>
        <label>
            <span>Imagem (link)</span>
            <input type='text' onChange={(e) => setImage(e.target.value)}>
            </input>
        </label>
            <input type="submit" value="Enviar post!" className="submit-button"/>
        </form>
    </div>
  )
}

export default AddPosts