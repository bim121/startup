import React from 'react';
import { NavLink } from 'react-router-dom';
import StartInformation from '../StartInformation/StartInformation';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
            <div className={style.information}>
                <StartInformation />
                {/* Второе */}

                <div className = {style.blockSecondPage}>
                  <div className = {style.secondBlockSecondPage}>
                    <p>This project gives you such opportunities as: </p>
                    <p>- ability to check the map of the building</p>
                    <p>- ability to show the way to the point in the building</p>
                    <p>- ability to find the rooms by name or number</p>
                  </div>
                  <div className={style.mapImages}>
                    <img src = "boi22.jpg" className={style.imageBoy} alt = "#"></img>
                    <img src = "karta2.png" className={style.imageMap} alt = "#"></img>
                  </div>
                </div>

                {/* 3 */}

                <h2>Team</h2>
                <div className = {style.blocksThirdPage}>
                <div className = {style.blockThirdPage}><img src = "Stepan.jpg" className = {style.imgsThirdPage} alt = "#"></img><p>Stepan Pan</p></div>
                <div className = {style.blockThirdPage}><img src = "Vitalik.jpg" className = {style.imgsThirdPage} alt = "#"></img><p>Vitalii Tischik</p></div>
                <div className = {style.blockThirdPage}><img src = "Danil.jpg" className = {style.imgsThirdPage} alt = "#"></img><p>Danil Tkachenko</p></div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ContentStartPage;