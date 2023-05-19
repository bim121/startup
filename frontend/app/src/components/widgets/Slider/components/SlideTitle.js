import React from "react";

import "../styles.scss";

const item = ["Stepan Pan 19 years old. Frontend develover", 
              "Danil Tkachenko 18 years old. CEO",
              "Vitalik Tishik 18 years old. Fullstack developer",
              "Masha Ustichuk 17 years old. CFO"];

export default function SlideTitle(props) {
  return <div className="slide-title">{item[props.indexes]}</div>;
}
