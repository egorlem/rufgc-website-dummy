import React, { useEffect, useState } from 'react';
import './profile.scss';

const UserMenuButton = (props) => {
  const { isHeaderDropDownOpen, setIsHeaderDropDownOpen } = props;
  useEffect(()=> {
    console.log('render');
  })
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
  return (
    <>
      <div className="header-user-menu-wrapper noselect">
        <div className="header-user-menu-item accent">
          Профиль
        </div>
        <div className="header-user-menu-item accent">
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