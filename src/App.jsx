import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import BodyNList from './Components/BodyNList';
import InputButton from './Components/InputButton';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult])

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
          setSearchResult((result) => [...result, data.data])
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
      <InputButton onSearch={handleSearch} errorMessage={errorMessage} />
      {searchResult.map((result, index) => (
        <BodyNList key={index} data={result}></BodyNList>
      ))}
      
    </>
  );
}

export default App;
