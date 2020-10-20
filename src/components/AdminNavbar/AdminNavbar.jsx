import React from 'react';
import {Row, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './admin-navbar.scss';

const ADMINLINKS = [
  { title: 'Авто-турниры', href: '/auto-tournaments' },
  { title: 'Турниры', href: '/admin-tournaments' },
  { title: 'Добавить турниры', href: '/admin-add-tournaments' },
  { title: 'Участники турнира', href: '/tournaments-participant' },
  { title: 'Добавить результаты турниров', href: '/add-results-tournaments' },
  { title: 'Пользователи', href: '/users' }
];

const adminLinks = ADMINLINKS.map(({ title, href }) => (
  <Nav.Item as="li" key={title}>
    <NavLink className='nav-link admin-nav__link' to={href}>{title}</NavLink>
  </Nav.Item>
));

const AdminNavbar = () => (
  <Navbar className="p-0 mb-1 mt-3">
    <Row className="w-100">
      <Nav className="justify-content-center flex-wrap justify-content-lg-between d-flex w-100" as="ul">
        {adminLinks}
      </Nav>
    </Row>
  </Navbar>
);

export default AdminNavbar;