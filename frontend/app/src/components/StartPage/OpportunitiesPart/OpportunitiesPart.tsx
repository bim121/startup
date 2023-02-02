import React from 'react';
import style from "./OpportunitiesPart.module.css";

const OpportunitiesPart= () => {
  return (
    <>
        <div className={style.wrapper}>
          <div className = {style.opportunitiesPart}>
              <div className = {style.textBlock}>
                  <p className={style.textLarge}>This <span>project gives you such opportunities</span> as:</p>
                  <p>- You can <span>check the map</span> of the building right in place don't be afraid to get lost</p>
                  <p>- ability to <span>show the way</span> to the point in the building if you did not know or forgot about them</p>
                  <p>- ability to <span>find the rooms</span> in any building by name or number</p>
              </div>
              <div className={style.images}>
                  <img src = "building.png" className={style.image} alt = "#"></img>
              </div>
          </div>        
        </div>    
    </>
  );
}

export default OpportunitiesPart;