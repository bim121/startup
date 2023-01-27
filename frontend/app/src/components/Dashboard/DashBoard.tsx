import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const DashBoard = () => {

  return (
    <>
        <Header />
        <div className='dashboard'>
            <h2 style={{marginBottom: "30px"}}>Howdy, David</h2>
            <button className='signOutBtn'>
                SIGN OUT
            </button>
        </div>
    </>
  );
}

export default DashBoard;