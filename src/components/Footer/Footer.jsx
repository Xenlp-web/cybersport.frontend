import React from 'react';
import './footer.scss';
import { Container, Image, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../Icons/logo.svg";
import Vk from "../../Icons/vk.svg";
import Youtube from "../../Icons/youtube.svg";
import Discord from "../../Icons/discord.svg";

const FOOTERLINKS = [
  { title: 'Пользовательское соглашение', href: '#' },
  { title: 'Политика конфиденциальности', href: '#' },
  { title: 'support@cybersport.com', href: '/support@cybersport.com' }
];

const SOCIALLINKS = [
  { title: 'vk', href: '#', icon: Vk },
  { title: 'youtube', href: '#', icon: Youtube },
  { title: 'discord', href: '#', icon: Discord }
];

const footerLinks = FOOTERLINKS.map(({ title, href }) => (
  <Nav.Item className='footer-nav__item' as="li" key={title}>
    <NavLink className='nav-link footer-nav__link d-inline-block' to={href} title={title}>{title}</NavLink>
  </Nav.Item>
));

const socialLinks = SOCIALLINKS.map(({ title, href, icon }) => (
  <Nav.Item className='social__item' as="li" key={title}>
    <NavLink className='nav-link social__link' to={href}><Image src={icon} /></NavLink>
  </Nav.Item>
));

const Footer = () => (
  <footer className="footer py-7 bg-dark">
    <Container>
      <Row className='align-items-center w-100'>
        <NavLink className='logo logo--footer mr-7' to="/">
          <Image src={LogoIcon} />
        </NavLink>
        <div className="footer__content">
          <p className='footer__descr m-0 px-2 text-white'>
            Cybersport.com © 2020 | Платформа для турниров PUBG MOBILE
          </p>
          <Nav className="mr-auto" as="ul">
            {footerLinks}
          </Nav>
        </div>
        <Nav className="nav__social ml-auto" as="ul">
          {socialLinks}
        </Nav>
      </Row>
    </Container>
  </footer>
);

export default Footer;