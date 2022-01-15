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

const getAuth = () => {
  const isAuth = localStorage.getItem('token');
  return isAuth;
}

function RequireAuth({ children }) {
  let isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to='/auth' />
}
function RequireAuth2({ children }) {
  const location = useLocation();
  console.log(location);
  let isAuthenticated = getAuth();
  return !isAuthenticated ? children : <Navigate to='/' />
}

const MainAppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route
        path="/profile"
        element={<RequireAuth><Profile /></RequireAuth>}
      />
      <Route
        exact path="/auth"
        element={<RequireAuth2><Auth /></RequireAuth2>}
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