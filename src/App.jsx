import React, { useState } from 'react';
import LoggedPage from './Components/LoggedPage';
import LoginPage from './Components/LoginPage';

function App() {

  const [page, setPage] = useState(null)

  const changePage = (variable) => {
    setPage(variable);
  }

  return (
    <>
      {!page && <LoginPage changePage={changePage}></LoginPage>}
      {page && <LoggedPage changePage={changePage}></LoggedPage>}
    </>
  );
}

export default App;
