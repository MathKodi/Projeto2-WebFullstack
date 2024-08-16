import React, { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import BodyNList from './BodyNList';
import InputButton from './InputButton';
import { InputValueProvider } from './Context';
import DivLoading from './DivLoading';
const LoggedPage = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [carregando, setCarregando] = useState(null);
  
    //Log aplicação
    useEffect(() => {
      console.log(searchResult);
    }, [searchResult]);
  
    const apiFunction = (inputValue) => {
      fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${inputValue}`)
      .then((response) => {
        if (response.status === 200) {
          setCarregando(false);
          return response.json();
        } else {
          setCarregando(false);
          throw new Error(
            'Digite um número entre 1 e 389 ou um nome de uma entidade existente, por gentileza amigão!',
          );
        }
      })
      .then((data) => {
        {
          searchResult.map((searched) => {
            if (searched.name === data.data.name) {
              throw new Error(
                'Entidade ja pesquisada mano! Dá uma olhada aí que cê acha ela!',
              );
            }
          });
        }
        setSearchResult((result) => [...result, data.data]);
      })
      .catch((error) => {
        setErrorMessage(`${error.message}`);
        console.log(error);
      });
    }
  
    const handleSearch = useMemo(() => {
      return (inputValue) => {
        if (inputValue.trim() === '') {
          setErrorMessage(
            'Não deixe a caixa de input vazia, faz favor mano tu já é grandinho já',
          );
        } else {
          setErrorMessage('');
          setCarregando(true);
          apiFunction(inputValue);
        }
      };
    });

  return (
    <div>
        <Header/>
      <InputValueProvider>
        <InputButton onSearch={handleSearch} errorMessage={errorMessage} />
      </InputValueProvider>
      {carregando && <DivLoading />}
      <BodyNList data={searchResult}></BodyNList>  
    </div>
  )
}

export default LoggedPage