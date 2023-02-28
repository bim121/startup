import Header from '../Header/Header';
import style from './DashBoard.module.css';
import Select from 'react-select'
import styled from "styled-components";
import Footer from '../Footer/Footer';
import { useState } from 'react';

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const StyledSelect = styled(Select)`
  .Select__control {
    vertical-align: middle;
    font-size: 1.5rem;
    text-align: center;
    height: 60px;
    width: 100%;
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    font-size: 1.5rem;
    text-align: center;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
    font-size: 1rem;
  }

  .Select__menu {
    color: #3c3d3e;
    font-size: 1rem;
  }
`;

const DashBoard = () => {
  const [selectedOption, setSelectedOption] = useState("none");

  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  const MyComponent = () => (
    <StyledSelect
      classNamePrefix="Select"
      onChange={handleTypeSelect}
      options={options}
      value={options.filter(function(option) {
        return option.value === selectedOption;
      })}
    />
  );

  return (
    <>
        <Header />
        <div className={style.content}>
          <div className={style.wrapper}>
            <div className={style.sectionSelect}>
              <MyComponent />
              <MyComponent />
              <MyComponent />
            </div>
            <div className={style.startImage}>
                <img src="startImage.png" className = {style.image} alt ="#"></img>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DashBoard;