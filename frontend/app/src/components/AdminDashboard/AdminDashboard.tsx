import Header from '../Header/Header';
import style from './AdminDashBoard.module.css';
import Select from 'react-select'
import styled from "styled-components";
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const AdminDashBoard = () => {
  const [messages, setMessages] = useState<String[]>([]);
  
  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('send_info', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);
   
  const messagesList = messages.map((message, index) => (
    <div key={index}>{message}</div>
  ));
    
    return (
        <>
            <Header />
            <div className={style.content}>
                <div className={style.wrapper}>
                  {messagesList}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AdminDashBoard;