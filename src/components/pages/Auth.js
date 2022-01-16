import React, { useCallback } from 'react'
import { Navigate, useNavigate } from 'react-router'

const AuthPage = () => {
  // const navigate = useNavigate()

  const handleAuth = useCallback(() => {
    localStorage.setItem('token', '__DEV__')
  }, [])
  return (
    <>
      <button onClick={handleAuth}>
        Войти
      </button>
    </>
  )
}


export default AuthPage;