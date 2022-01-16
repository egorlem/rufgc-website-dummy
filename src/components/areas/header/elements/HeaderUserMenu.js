import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './profile.scss';

const UserMenuButton = (props) => {
  const { isHeaderDropDownOpen, setIsHeaderDropDownOpen } = props;
  return (
    <>
      <div
        className="profilte-button-wrapper noselect"
        onClick={() => setIsHeaderDropDownOpen(!isHeaderDropDownOpen)}
      >
        Профиль
      </div>
    </>
  )
}

const UserDropDownMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  }
  return (
    <>
      <div className="header-user-menu-wrapper noselect">
        <div className="header-user-menu-item accent">
          <NavLink to="/profile" >Профиль</NavLink>
        </div>
        <div
          className="header-user-menu-item accent"
          onClick={handleLogout}
        >
          Выйти
        </div>
      </div>
    </>
  )
}


const HeaderUserMenu = () => {
  const [isHeaderDropDownOpen, setIsHeaderDropDownOpen] = useState(false);
  return (
    <>
      <div className="header-user-menu-root">
        <UserMenuButton
          setIsHeaderDropDownOpen={setIsHeaderDropDownOpen}
          isHeaderDropDownOpen={isHeaderDropDownOpen}
        />
        {isHeaderDropDownOpen && <UserDropDownMenu />}
      </div>
    </>
  )
}


export default HeaderUserMenu;