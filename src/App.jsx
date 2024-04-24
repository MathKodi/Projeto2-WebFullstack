import React, { useEffect, useMemo, useState } from 'react';
import Header from './Components/Header';
import BodyNList from './Components/BodyNList';
import InputButton from './Components/InputButton';
import { InputValueProvider, useInputValue } from './Components/Context';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult])

  const handleSearch = useMemo(() => {
    return(inputValue) => {
    if (inputValue.trim() === '') {
      setErrorMessage('Não deixe a caixa de input vazia, faz favor mano tu já é grandinho já');
    } else {
      setErrorMessage('');
      fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${inputValue}`,
      )
        .then((response) => {
          if(response.status === 200){
            return response.json();
          } else{
            throw new Error("Digite um número entre 1 e 389 ou um nome de uma entidade existente, por gentileza amigão!")
          }
        })
        .then((data) => {
          {searchResult.map((searched) => {
            if(searched.name === data.data.name){
              throw new Error("Entidade ja pesquisada mano! Dá uma olhada aí que cê acha ela!")
            }
          })}
          setSearchResult((result) => [...result, data.data])
        })
        .catch((error) => {
          setErrorMessage(
            `${error.message}`,
          );
          console.log(error);
        });
    }
    }}
    )


  return (
    <>
      <InputValueProvider>
        <Header></Header>
        <InputButton onSearch={handleSearch} errorMessage={errorMessage} />
        {searchResult.map((result, index) => (
          <BodyNList key={index} data={result}></BodyNList>
        ))}
      </InputValueProvider>
      
    </>
  );
}

export default App;
