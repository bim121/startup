import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
            <div className={style.information}>
                <div className={style.imgsFirstPage}>
                <p><img src = "karta.jpg" className= {style.imgFirstPage}></img></p>
                <p><img src = "boi1.jpg" className= {style.imgFirstPage}></img></p>
                <p><img src = "karta.jpg" className= {style.imgFirstPage}></img></p>
                </div>
                <p className={style.textFirstPage}>Salam, user. This website allows you to find any map of any building you are in.</p>
                <p className={style.textFirstPage}>Also, in future we are planning to add some new features and possibilities here.</p>
            </div>
            {/*<div className={style.image}></div> - удалили*/}
        </div>
    </>
  );
}

export default ContentStartPage;