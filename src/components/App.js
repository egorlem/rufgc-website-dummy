import React from 'react'
import AppFooter from './areas/footer/footer';
import AppHeader from './areas/header/haeder';
import MainAppRouter from './Routes';
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div class="app--background app--layout">
          <AppHeader />
          <MainAppRouter />
          <AppFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;