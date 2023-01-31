import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
            <div className={style.information}>
                <div className={style.imgsFirstPage}>
                <img src = "karta.jpg" className= {style.imgFirstPage}></img>
                <img src = "boi1.jpg" className= {style.imgFirstPage}></img>
                <img src = "karta.jpg" className= {style.imgFirstPage}></img>
                </div>
                <p className={style.textFirstPage}>Salam, user. This website allows you to find any map of any building you are in.</p>
                <p className={style.textFirstPage}>Also, in future we are planning to add some new features and possibilities here.</p>
                {/* Второе */}
                <div className = {style.blockSecondPage}>
                <div className = {style.secondBlockSecondPage}>
                <p className = {style.textSecondPage}>This project gives you such opportunities as: </p>
                <p className = {style.textSecondPage}>- ability to check the map of the building</p>
                <p className = {style.textSecondPage}>- ability to show the way to the point in the building</p>
                <p className = {style.textSecondPage}>- ability to find the rooms by name or number</p>
                </div>
                <img src = "boi22.jpg" className={style.imgSecondPage}></img>
                <img src = "karta2.png" className={style.imgSecondPage}></img>
                </div>
            </div>
            {/*<div className={style.image}></div> - удалили*/}
        </div>
    </>
  );
}

export default ContentStartPage;