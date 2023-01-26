import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <>
        <div className={style.header}>
            <div className={style.image__logo}>
                <NavLink to = '/'><img src="logo.png" alt="logo"/></NavLink>
            </div>
            <div className={style.links}>
                <NavLink to ='/login'>Вхід</NavLink>
                <NavLink to ='/register'>Реєстрація</NavLink>
            </div>
        </div>
    </>
  );
}

export default Header;