import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Footer.module.css";

const ContentStartPage = () => {
  return (
    <>
        <footer>
            <div className={style.footer}>
            <div className={style.footerContent}>
                <a href = "#!"><img src = "newlogo.png" className={style.logotype} alt = "#"></img></a>
                <div className = {style.footerText}>
                    <div className = {style.footerColumn}>
                      <a href = "#!">Our telegram chat</a>
                      <a href = "#!">Support</a>
                      <a href = "#!">About us</a>
                    </div>
                    <div className = {style.footerColumn}>
                      <a href = "#!">Contacts</a>
                      <a href = "#!">Status</a>
                      <a href = "#!">Instructions</a>
                    </div>
                </div>
            </div>
            <div className = {style.copyInfo}>
                <p className={style.copyInfoText}>©2023 Pocket Buddy. All rights protected</p>
            </div>
            </div>
        </footer>
    </>
  );
}

export default ContentStartPage;                

<div className = {style.copyInfo}>
                <p className={style.copyInfoText}>©2023 Pocket Buddy. All rights protected</p>
            </div>