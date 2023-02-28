import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "../Slider";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);
  console.log(items[0])
  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} indexes = {index}/>
      ))}
    </div>
  );
}
