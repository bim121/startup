import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ContentStartPage from '../ContentStartPage/ContentStartPage';
import style from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={style.wrapper}>
        <Header />
        <ContentStartPage />
        <Footer />
    </div>
  );
}

export default StartPage;