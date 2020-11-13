import React from 'react';
import './footer.scss';
import { Container, Image, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../Icons/logo.svg";
import Vk from "../../Icons/vk.svg";
import Youtube from "../../Icons/youtube.svg";
import Discord from "../../Icons/discord.svg";
import Home from "../../Icons/home.svg";
import Tournament from "../../Icons/tournament.svg";
import Rating from "../../Icons/rating.svg";
import Profile from "../../Icons/profile.svg";

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

const MOBILEMENULINK = [
  { title: 'Главная', href: '/', icon: Home },
  { title: 'Турниры', href: '/tournament', icon: Tournament },
  { title: 'Рейтинг', href: '/rating', icon: Rating },
  { title: 'Личный кабинет', href: '/info', icon: Profile }
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

const mobileMenuLink = MOBILEMENULINK.map(({ title, href, icon }) => (
  <Nav.Item className='mobile-menu__item' as="li" key={title}>
    <NavLink className='nav-link mobile-menu__link' to={href}><Image src={icon} /></NavLink>
  </Nav.Item>
));

const Footer = () => (
  <>
    <footer className="footer py-3 py-md-7 bg-dark">
      <Container>
        <Row className='align-items-center'>
          <NavLink className='logo logo--footer mx-auto mb-2 mb-md-0 ml-md-0 mr-md-7' to="/">
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
          <Nav className="nav__social m-auto ml-md-auto mr-md-0" as="ul">
            {socialLinks}
          </Nav>
        </Row>
      </Container>
    </footer>
    <Nav className="mobile-menubar fixed-bottom bg-dark justify-content-around d-flex d-lg-none" as="ul">
      {mobileMenuLink}
    </Nav>
  </>
);

export default Footer;