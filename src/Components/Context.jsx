import React, { createContext, useContext, useState } from 'react';

const InputValueContext = createContext();

export const InputValueProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputValueContext.Provider>
  );
};

export const useInputValue = () => useContext(InputValueContext);
