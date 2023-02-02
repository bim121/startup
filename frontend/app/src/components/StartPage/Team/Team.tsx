import style from "./Team.module.css";

const Team = () => {
  return (
    <>
        <div className={style.wrapper}>
            <div className={style.block}>
                <h2>Team</h2>
                <div className = {style.blocksThirdPage}>
                  <div className = {style.blockThirdPage}><img src = "Stepan.png" className = {style.imgsThirdPage} alt = "#"></img><p>Stepan Pan</p></div>
                  <div className = {style.blockThirdPage}><img src = "Vitalik.png" className = {style.imgsThirdPage} alt = "#"></img><p>Vitalii Tischik</p></div>
                  <div className = {style.blockThirdPage}><img src = "Danil.png" className = {style.imgsThirdPage} alt = "#"></img><p>Danil Tkachenko</p></div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Team;