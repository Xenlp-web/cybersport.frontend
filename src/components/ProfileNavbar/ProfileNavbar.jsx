import React from 'react';
import {Row, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './profile-navbar.scss';

const PROFILELINKS = [
  { title: 'Основная информация', href: '/info' },
  { title: 'Настройки профиля', href: '/settings' },
  { title: 'Магазин билетов', href: '/store' }
];

const profileLinks = PROFILELINKS.map(({ title, href }) => (
  <Nav.Item as="li" key={title}>
    <NavLink className='nav-link profile-nav__link' to={href}>{title}</NavLink>
  </Nav.Item>
));

const ProfileNavbar = () => (
        <Navbar className="p-0 mb-4 d-none d-md-flex">
          <Row>
            <Nav className="mr-auto" as="ul">
              {profileLinks}
            </Nav>
          </Row>
        </Navbar>
);

export default ProfileNavbar;