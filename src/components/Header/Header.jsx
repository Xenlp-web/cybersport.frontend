import React from 'react';
import { Navbar, Nav, Image, Container, Row, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import {useSelector} from "react-redux";

import {checkAuth} from "@app/selectors/checkAuth";
import store from "@app/store/store";
import {userDataSelector} from '@app/selectors/userDataSelector';
import LogoIcon from '@app/Icons/logo.svg';

import './header.scss';

const NAVLINKS = [
  { title: 'Турниры', href: '/tournament' },
  { title: 'Рейтинг', href: '/rating' },
  { title: 'Правила', href: '/Rules'}
];

const AUTH = checkAuth(store);

const navLinks = NAVLINKS.map(({ title, href }) => (
    <Nav.Item as="li" key={title}>
      <NavLink className='nav-link header-nav__link' to={href}>{title}</NavLink>
    </Nav.Item>
));

const userInfo = (userData = {email: '', tickets: ''}) => {
  return (
    <div className='user-info d-flex align-items-center text-white'>
      <div className='user-info__tickets'><span className='tickets'> </span>{userData.tickets}</div>
      <Link to='/info' className='user-info__avatar rounded-circle'>
        <Image className='user-info__avatar-images' src={require('@app/Icons/avatar-default.svg').default} />
      </Link>
      <div className='user-info__email'>{userData.email}</div>
    </div>
  )
};

const Header = (props) => {
  const setSingInShow = props.setSingInShow;
  const userData = useSelector(userDataSelector);

  return (
  <header>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Row className='align-items-center w-100 justify-content-between m-0'>
          <NavLink className='avatar-mobile d-inline-block d-lg-none' to="/info">
            <Image src={require('../../Icons/avatar-default.svg').default} />
          </NavLink>
          <NavLink className='logo logo--header' to="/">
            <Image src={LogoIcon} />
          </NavLink>
          <div className="ml-4">
            <span className="lang_icon mr-3">
              <img  src={require('../../Icons/eu.png').default} alt=""/>
            </span>
            <span className="lang_icon" >
              <img src={require('../../Icons/us.png').default} alt=""/>
            </span>
          </div>
          <span className="header-divider d-none d-lg-block">/</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" as="ul">
              {navLinks}
            </Nav>
          </Navbar.Collapse>
          <div className='d-none d-lg-flex navbar__right ml-auto align-content-center'>
            <Button className={AUTH ? 'mr-5 px-4' : 'mr-4 px-4'} variant="light">
                <span className="rec bg-danger rounded-circle d-inline-block mr-2"> </span>
                Прямой эфир
            </Button>
            {AUTH
              ? userInfo(userData)
              : <Button variant="danger" onClick={() => setSingInShow(true)}>Войти</Button>
            }
          </div>
        </Row>
      </Container>
    </Navbar>
  </header>
)
};

export default Header;
