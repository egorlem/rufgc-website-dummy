import React from 'react'
import AppFooter from './areas/footer/footer';
import AppHeader from './areas/header/haeder';
import MainAppRouter from './Routes';
import { BrowserRouter } from "react-router-dom";
import { store } from '../store/store'
import { Provider } from 'react-redux'

const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div class="app--background app--layout">
            <AppHeader />
            <MainAppRouter />
            <AppFooter />
          </div>
        </BrowserRouter>
      </Provider >
    </>
  );
}

export default App;