import React, {useState} from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import MainContent from './../../routes/route.jsx';
import Login from "../Login/Login.jsx";
import './Layout.scss';

const Layout = () => {
  const [singInShow, setSingInShow] = useState(false);
  const [registrationShow, setRegistrationShow] = useState(false);

  return (
    <>
      <Login
        singInShow={singInShow}
        setSingInShow={setSingInShow}
        registrationShow={registrationShow}
        setRegistrationShow={setRegistrationShow}
      />
      <Header setSingInShow={setSingInShow} />
      <div className='main'>
        <MainContent setSingInShow={setSingInShow}/>
      </div>
      <Footer/>
        </>
  )
}

export default Layout;