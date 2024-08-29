import React, { useState, useEffect } from "react";
import "./InputButton.css";
import { useInputValue } from "./Context";

const InputButton = ({ onSearch, errorMessage }) => {
  const { inputValue, setInputValue } = useInputValue();
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    onSearch(inputValue);
  };

  // Função para buscar sugestões
  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://localhost:3000/posts?query=${query}`);
      const data = await response.json();
      setSuggestions(data.posts || []); // Garante que suggestions é sempre um array
    } catch (error) {
      console.error('Erro ao buscar sugestões:', error);
      setSuggestions([]); // Garante que suggestions é sempre um array
    } finally {

    }
  };

  // Efeito para buscar sugestões quando o valor da entrada mudar
  useEffect(() => {
    if (inputValue) {
      fetchSuggestions(inputValue);
    } else {
      setSuggestions([]); // Limpa sugestões quando a entrada está vazia
    }
  }, [inputValue]);

  return (
    <div className="search-bg">
      <div className="search">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="input"
          placeholder="Digite para buscar..."
        />
        <button className="btn" id="btn" onClick={handleSearch}>
          Search
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        {loading && <p>Loading...</p>}
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} className="suggestion-item">
                {suggestion.name} {/* Ajuste para a estrutura de dados correta */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputButton;
