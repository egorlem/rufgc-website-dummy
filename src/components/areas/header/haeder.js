import React from 'react'
import HeaderUserMenu from './elements/HeaderUserMenu'


const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="header-content-wrapper content--limiter">
        <div className="logo">Найди своe FGC</div>
        <div className="header-theme-toggle"></div>
        <HeaderUserMenu />
      </div>
    </header>
  );
}


export default AppHeader;