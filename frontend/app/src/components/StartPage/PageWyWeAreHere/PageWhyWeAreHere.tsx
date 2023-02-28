import style from "./PageWhyAreWeHere.module.css";

const PageWhyWeAreHere = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.whyAreWeHere}>
            <h2>WHY ARE WE HERE</h2>
            <div className={style.textBlock}>
                <p>
                We offer you to try out "indoor navigation" if you need to find a way to consulting room in 
                hospital, room in your university or exact store branch in a shopping mall. Its 
                an easy to use application for travelers, first-year-students and other guys. 
                Just type the number of room and application will show you the way to any place you
                 want in any kind of building.
                </p>
            </div>
        </div>
    </div>
  );
}

export default PageWhyWeAreHere;