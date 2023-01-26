import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
            <div className={style.information}>
                <p>asdjfkajdkf asdfasdfkj asdfjladkfj adfsfd asdjfkajdkf asdfasdfkj asdfjladkfj adfsfd</p>
            </div>
            <div className={style.image}>
                <img src="books.png" alt="logo"/>
            </div>
        </div>
    </>
  );
}

export default ContentStartPage ;