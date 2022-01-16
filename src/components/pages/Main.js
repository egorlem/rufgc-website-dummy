import React from 'react'
import { useSelector } from 'react-redux';
import AppContent from '../areas/content/content'

const MainPage = () => {
  const state = useSelector((state) => state)
  console.log(state);
  return (
    <>
      <AppContent />
    </>
  );
}

export default MainPage;