import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Header/Header';
import ContentStartPage from '../ContentStartPage/ContentStartPage';
import style from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={style.wrapper}>
        <Header />
        <ContentStartPage />
    </div>
  );
}

export default StartPage;