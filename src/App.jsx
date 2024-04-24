import React, { useState } from 'react';
import Header from './Components/Header';
import BodyNList from './Components/BodyNList';
import InputButton from './Components/InputButton';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (inputValue) => {
    if (inputValue.trim() === '') {
      setErrorMessage('Se você não digitar nada me complica né paizão');
    } else {
      setErrorMessage('');
      fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${inputValue}`,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          setSearchResult(data.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados:', error);
          setErrorMessage(
            'Erro ao buscar dados. Por favor, tente novamente mais tarde.',
          );
        });
    }
  };

  return (
    <>
      <Header></Header>
      <InputButton onSearch={handleSearch} />
      <p className={errorMessage ? '' : 'hidden'}>{errorMessage}</p>
      <BodyNList data={searchResult}></BodyNList>
    </>
  );
}

export default App;
