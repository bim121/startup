import Header from '../Header/Header';
import style from './DashBoard.module.css';
import Select from 'react-select'
import styled from "styled-components";
import Footer from '../Footer/Footer';
import { useState } from 'react';

const optionsMaps = [
  { value: "Main", label: "Main" }
];

const optionsBuildings = [
  { value: "Petro Mohyla National University", label: "Petro Mohyla National University" }
];

const optionsCities = [
  { value: "Mykolaiv", label: "Mykolaiv" }
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
  const [selectedOptionFirst, setSelectedOptionFirst] = useState("none");
  const [selectedOptionSecond, setSelectedOptionSecond] = useState("none");
  const [selectedOptionThird, setSelectedOptionThird] = useState("none");
  const [imageData, setImageData] = useState(null);

  const handleButtonClick = () => {
    setImageData("http://localhost:5000/image/1e3821a3-e00a-47cf-b575-992cc1bcf6bb.png");
    if (imageData) {
          renderPicture();
    }
  };

  const renderPicture = () => {
    return <img src={imageData} className = {style.image}/>;
  };

  const handleTypeSelectFirst = (e) => {
    setSelectedOptionFirst(e.value);
  };

  const handleTypeSelectSecond = (e) => {
    setSelectedOptionSecond(e.value);
  };

  const handleTypeSelectThird= (e) => {
    setSelectedOptionThird(e.value);
  };


  const MyComponent = (props) => (
    <StyledSelect
      classNamePrefix="Select"
      onChange={props.handleTypeSelect}
      options={props.options}
      value={props.options.filter(function(option) {
        return option.value === props.selectedOption;
      })}
    />
  );

  return (
    <>
        <Header />
        <div className={style.content}>
          <div className={style.wrapper}>
            <div className={style.sectionSelect}>
              <MyComponent handleTypeSelect = { handleTypeSelectFirst} selectedOption = {selectedOptionFirst} options = {optionsCities}/>
              <MyComponent handleTypeSelect = { handleTypeSelectSecond} selectedOption = {selectedOptionSecond} options = {optionsBuildings}/>
              <MyComponent handleTypeSelect = { handleTypeSelectThird} selectedOption = {selectedOptionThird} options = {optionsMaps}/>
            </div>
            <div className={style.startImage}>
              {imageData ? renderPicture() : ""}
            </div>
          </div>
          <div>
            <button onClick={handleButtonClick}>Search</button>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default DashBoard;