import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Image, Container, Row, Button } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

import { checkAuth } from "@app/selectors/checkAuth";
import { userDataSelector } from '@app/selectors/userDataSelector';
import LogoIcon from '@app/Icons/logo.svg';

import './header.scss';

const NAVLINKS = [
  { title: 'Турниры', href: '/tournament', icon: 'tournament-menu.svg' },
  { title: 'Рейтинг', href: '/rating', icon: 'rating-menu.svg' },
  { title: 'Правила', href: '/rules', icon: 'rules-menu.svg' },
  { title: 'Магазин', href: '/store', icon: 'tickets-white.svg' },
  { title: 'Прямой эфир', href: '/translation', icon: 'rec.svg' }
];

const NAVLINKSSMALL = [
  { title: 'Турниры', href: '/tournament' },
  { title: 'Рейтинг', href: '/rating' }
];

const AUTH = checkAuth();

const navLinks = NAVLINKS.map(({ title, href, icon }) => (
    <Nav.Item as="li" key={title}>
      <NavLink className='nav-link header-nav__link' to={href}>
        <Image className='header-nav__link--icon' src={require(`@app/Icons/${icon}`).default} />
        {title}
      </NavLink>
    </Nav.Item>
));

const navLinksSmall = NAVLINKSSMALL.map(({ title, href }) => (
  <Nav.Item as="li" key={title}>
    <NavLink className='nav-link header-nav__link' to={href}>
      {title}
    </NavLink>
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
  const location = useLocation();
  const [activeNavbar, setActiveNavbar] = useState('main');

  useEffect(() => {
    if (location.pathname === '/' ||
        location.pathname === '/auto-tournaments' ||
        location.pathname === '/admin-tournaments' ||
        location.pathname === 'admin-add-tournaments' ||
        location.pathname === 'tournaments-participant' ||
        location.pathname === 'add-results-tournaments' ||
        location.pathname === 'users'
    ) {
      setActiveNavbar('second');
    } else {
      setActiveNavbar('main');
    }
  }, [location]);

  const setSingInShow = props.setSingInShow;
  const userData = useSelector(userDataSelector);

  return (
  <header>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Row className='align-items-center w-100 justify-content-between m-0 position-relative'>
          {AUTH
            ? <NavLink className='avatar-mobile d-inline-block d-lg-none' to="/info">
                <Image src={require('../../Icons/avatar-default.svg').default} />
              </NavLink>
            : <NavLink className='avatar-mobile d-inline-block d-lg-none' onClick={() => setSingInShow(true)} to="#">
                <Image src={require('../../Icons/avatar-default.svg').default} />
              </NavLink>
          }
          <NavLink className='logo logo--header mr-4' to="/">
            <Image src={LogoIcon} />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"
                           className={(activeNavbar !== 'main') ? 'main-navbar--hidden' : 'main-navbar--active'}>
            <Nav className="mr-auto" as="ul">
              {navLinks}
              <div className="p-2 mb-3">
                <span className="lang_icon mr-3">
                  <img  src={require('../../Icons/eu.png').default} alt=""/>
                </span>
                    <span className="lang_icon" >
                  <img src={require('../../Icons/us.png').default} alt=""/>
                </span>
              </div>
              {AUTH
                ? ''
                : <Button className="d-lg-none" variant="danger" onClick={() => setSingInShow(true)}>Войти</Button>
              }
            </Nav>
          </Navbar.Collapse>
          <Navbar className={(activeNavbar !== 'main') ? 'second-navbar--active p-0' : 'second-navbar--hidden p-0'}>
            <Nav className="mr-auto" as="ul">
              {navLinksSmall}
            </Nav>
          </Navbar>
          <div className='d-none d-lg-flex navbar__right ml-auto align-content-center'>
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
