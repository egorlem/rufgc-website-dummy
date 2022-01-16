import React, { useEffect } from 'react'
import AppFooter from './areas/footer/footer';
import AppHeader from './areas/header/haeder';
import MainAppRouter from './Routes';
import { BrowserRouter } from "react-router-dom";
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../store/redux/initialReducer';

const MainApp = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserById());
  }, [])

  // console.log(state.init.token);
  return (
    <div className="app--background app--layout">
      <AppHeader />
      <MainAppRouter isAuth={state.init.token} />
      <AppFooter />
    </div>
  )
}

const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </Provider >
    </>
  );
}

export default App;