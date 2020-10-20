import React from 'react';
import { Navbar, Nav, Image, Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoIcon from './../../Icons/logo.svg';

import './header.scss';

const NAVLINKS = [
  { title: 'Турниры', href: '/tournament' },
  { title: 'Рейтинг', href: '/rating' }
];

const USERINFO = [
    {
      id: 1,
      tickets: 100,
      avatar: 'avatar-default.svg',
      email: 'test@mai.ru'
    }
];

let AUTH = true;

const navLinks = NAVLINKS.map(({ title, href }) => (
    <Nav.Item as="li" key={title}>
      <NavLink className='nav-link header-nav__link' to={href}>{title}</NavLink>
    </Nav.Item>
));

const userInfo = USERINFO.map(({ id, tickets, avatar, email }) => (
      <div className='user-info d-flex align-items-center text-white' key={id}>
        <div className='user-info__tickets'><span className='tickets'> </span>{tickets}</div>
        <div className='user-info__avatar rounded-circle'>
            <Image className='user-info__avatar-images' src={require('../../Icons/' + avatar).default} />
        </div>
        <div className='user-info__email'>{email}</div>
      </div>
));

const Header = (props) => {
  const setSingInShow = props.setSingInShow;
  return (
  <header>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Row className='align-items-center w-100 justify-content-between m-0'>
          <NavLink className='avatar-mobile d-inline-block d-lg-none' to="#">
            <Image src={require('../../Icons/avatar-default.svg').default} />
          </NavLink>
          <NavLink className='logo logo--header' to="/">
            <Image src={LogoIcon} />
          </NavLink>
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
              ? <Button variant="danger" onClick={() => setSingInShow(true)}>Войти</Button>
              : userInfo
            }
          </div>
        </Row>
      </Container>
    </Navbar>
  </header>
)
};

export default Header;