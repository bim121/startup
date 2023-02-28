import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "./../styles.scss";

export default function Slide(props) {
  return (
    <div className="slide">
      <SlideImage alt="#" indexes = {props.indexes}/>
      <SlideTitle title="sdfdgdasdfsdafdfdasf dsaf dsf dafasd fsdfsadf sdf sda fsdf sdf sdfdsafadsf adsafd sda dasf dsf dsf sdfsdf sd 
      sdfsdf dsfsd fdsf dsf sdf df sdf dsfdsa fas fdsfsdf sdfsdf sdf 
      s dfs dfsdf df sd fdsfsd fsdfas" />
    </div>
  );
}
