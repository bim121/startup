import Slider from '../../widgets/Slider/Slider';
import OpportunitiesPart from '../OpportunitiesPart/OpportunitiesPart';
import PageWhyWeAreHere from '../PageWyWeAreHere/PageWhyWeAreHere';
import StartInformation from '../StartInformation/StartInformation';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
          <StartInformation />
          <OpportunitiesPart />
          <PageWhyWeAreHere />
          <Slider/>
        </div>
    </>
  );
}

export default ContentStartPage;