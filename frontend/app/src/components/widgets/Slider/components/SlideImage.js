import React from "react";

import "../styles.scss";

const item = ["Stepan.png", "Danil.png", "Vitalik.png", "Masha.png"]

export default function SlideImage(props) {
  return <img src={item[props.indexes]} alt={props.alt} className="slide-image" />;
}
