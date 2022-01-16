import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
  useLocation,
  Navigate,
  useNavigationType,
  useResolvedPath
} from "react-router-dom";
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Main from './pages/Main'

const getAuth = ({ isAuth }) => {
  return Boolean(isAuth);
}

function RequireAuth({ children, isAuth }) {
   let isAuthenticated = getAuth({ isAuth });
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to='/auth' />
}

const MainAppRouter = (props) => {
  console.log(props);
  const { isAuth } = props;
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route
        path="/profile"
        element={<RequireAuth isAuth={isAuth} ><Profile /></RequireAuth>}
      />
      <Route
        exact path="/auth"
        element={<Auth />}
      />
      <Route
        exact path="/register"
        element={<Register />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes >
  )
}

export default MainAppRouter;