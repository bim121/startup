import OpportunitiesPart from '../OpportunitiesPart/OpportunitiesPart';
import PageWhyWeAreHere from '../PageWyWeAreHere/PageWhyWeAreHere';
import StartInformation from '../StartInformation/StartInformation';
import Team from '../Team/Team';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
          <StartInformation />
          <OpportunitiesPart />
          <PageWhyWeAreHere />
          <Team />
        </div>
    </>
  );
}

export default ContentStartPage;