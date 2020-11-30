import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import MainContent from './../../routes/route.jsx';
import Login from "../Login/Login.jsx";
import './Layout.scss';
import { loadAuthUserInfoAction } from "@app/api/requests/authUserInfo";
import useInit from "@app/utils/init";

const Layout = () => {
  const [singInShow, setSingInShow] = useState(false);
  const [registrationShow, setRegistrationShow] = useState(false);

  useInit(() => loadAuthUserInfoAction(), []);

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