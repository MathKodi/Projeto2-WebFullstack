import React, { useState } from 'react';
import './AddPosts.css';

const AddPosts = ({ onSearch, errorMessage, handleErrorMessage }) => {
  const [name, setName] = useState('');
  const [commonPlaces, setCommonplaces] = useState('');
  const [description, setDescription] = useState('');
  const [drops, setDrops] = useState('');
  const [image, setImage] = useState('');

  const handleSearch = () => {
    onSearch(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const post = {
      name: name,
      commonPlaces: commonPlaces,
      description: description,
      drops: drops,
      image: image,
    };

    try {
      const response = await fetch('https://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleSearch();
      } else {
        const errors = await response.json();
        handleErrorMessage(errors.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="add-posts">
      <div class="form-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div class="form-group">
            <label>
              <span>Name:</span>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
          </div>
          <div class="form-group">
            <label>
              <span>Lugares comuns</span>
              <input
                type="text"
                onChange={(e) => setCommonplaces(e.target.value)}
              ></input>
            </label>
          </div>
          <div class="form-group">
            <label>
              <span>Descrição</span>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </label>
          </div>
          <div class="form-group">
            <label>
              <span>Drops</span>
              <input
                type="text"
                onChange={(e) => setDrops(e.target.value)}
              ></input>
            </label>
          </div>
          <div class="form-group">
            <label>
              <span>Imagem (link)</span>
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </label>
          </div>

          <input type="submit" value="Enviar post!" className="submit-button" />
        </form>
      </div>
    </div>
  );
};

export default AddPosts;
