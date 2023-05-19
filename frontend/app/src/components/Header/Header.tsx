import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <>
        <div className={style.header}>
            <div className={style.wrapper}>
              <div className={style.image__logo}>
                  <NavLink to = '/'><img src="newlogo.png" alt="logo" className={style.logotype}/></NavLink>
              </div>
              <div className={style.links}>
                  <NavLink to ='/login'>Вхід</NavLink>
                  <NavLink to ='/register'>Реєстрація</NavLink>
                  <NavLink to ='/adminDashboard'>admin dashboard</NavLink>
              </div>
            </div>
        </div>
    </>
  );
}

export default Header;