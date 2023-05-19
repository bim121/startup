import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "./../styles.scss";

export default function Slide(props) {
  return (
    <div className="slide">
      <SlideImage alt="#" indexes = {props.indexes}/>
      <SlideTitle indexes = {props.indexes} />
    </div>
  );
}
