import React, {useState} from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import MainContent from './../../routes/route.jsx';
import './Layout.scss';

const Layout = () => (
  <BrowserRouter>
    <Header />
    <div className='main'>
      <MainContent/>
    </div>
    <Footer/>
    <Login/>
  </BrowserRouter>
)

export default Layout;