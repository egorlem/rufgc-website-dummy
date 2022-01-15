import React from 'react'
import HeaderUserMenu from './elements/HeaderUserMenu'
import { NavLink } from "react-router-dom";


const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="header-content-wrapper content--limiter">
        <div className="logo">
          <NavLink to="/" >Найди своe FGC</NavLink>
        </div>
        <div className="header-theme-toggle"></div>
        <HeaderUserMenu />
      </div>
    </header>
  );
}


export default AppHeader;