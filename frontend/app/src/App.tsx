import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './components/FormComponents/LoginPage/Login';
import Register from './components/FormComponents/RegisterPage.tsx/Register';
import StartPage from './components/StartPage/StartPage/StartPage';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element= {<StartPage/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/register" element= {<Register />}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
