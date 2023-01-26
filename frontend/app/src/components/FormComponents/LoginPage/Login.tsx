import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Header/Header';

const Login = () => {
  return (
    <>
        <Header />
        <div className='content'>
            <div className='text'>
                <p>Login</p>
            </div>
            <form>
                <label htmlFor="login">Login</label>
                <input type="text" id="login" name="Login" placeholder="Enter login"/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="Login" placeholder="Enter password"/>
                <input type="submit" value="Увійти" />
            </form>
        </div>
    </>
  );
}

export default Login;