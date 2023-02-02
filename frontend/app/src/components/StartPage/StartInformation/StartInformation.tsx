import React from 'react';
import style from "./StartInformation.module.css";

const StartInformation= () => {
  return (
    <div className={style.startInformation}>
        <div className={style.textBlock}>
            <p><span>Indoor navigation</span></p>
            <p>already with you</p>
            <p className={style.text}>
                With the help of our service, <span>you can easily navigate 
                in any building</span> without worrying about getting lost!
            </p>
        </div>
        <div className={style.startImage}>
            <img src="df.png" className = {style.image} alt ="#"></img>
        </div>
    </div>
  );
}

export default StartInformation;