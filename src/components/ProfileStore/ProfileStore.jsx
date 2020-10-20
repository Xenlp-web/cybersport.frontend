import React from 'react';
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar.jsx';
import './profile-store.scss';
import {Col, Container, Row, Card, Button} from "react-bootstrap";

const ADVANTAGECARD = [
  {
    images: 'img-1.png',
    title: '',
    tickets: 1,
    price: 49,
    profit: false
  },
  {
    images: 'img-2.png',
    title: 'Берут чаще всего',
    tickets: 3,
    price: 45,
    profit: false
  },
  {
    images: 'img-3.png',
    title: 'Самый выгодный вариант',
    tickets: 10,
    price: 40,
    profit: true
  }
];

const StoreCards = () => {
  const cardItems = ADVANTAGECARD.map(({images, title, tickets, price, profit}, index) => (
    <Col sm={12} md={6} lg={4} key={index}>
      <Card className={profit ? 'store_card text-white text-center d-flex align-items-center flex-column bg-danger mx-0' :
                                'store_card text-white text-center d-flex align-items-center flex-column bg-dark mx-0'}
      >
        <div className="store_card-head d-flex align-items-end">
          <Card.Img src={require("../../images/store/" + images).default}/>
        </div>
        <Card.Body className="d-flex justify-content-end flex-column align-items-center">
          <Card.Title className="store_card-title" as="h6">{title}</Card.Title>
          <p className="store_card-full_price text-white">
            <span className={profit ? 'tickets tickets--white' : 'tickets'}></span>
            {tickets} билет = <span className={profit ? '' : 'text-danger'}>{tickets * price} ₽</span>
          </p>
          <p className="store_card-price text-white">
            1 билет = {price} ₽
          </p>
          <Button variant={profit ? 'light text-danger' : 'danger'}>Купить</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return cardItems;
};

const ProfileStore = () => {
  const PLAYER = {
    nick: 'SuperStrelok',
    rp: '250',
    rank: 'Prime',
    ticket: 100,
    money: 4100,
    bonus: 4100,
    refLink: 'https://pubgmatch.ru/r/jgfsyw',
    refBonus: 4100,
    refMoney: 2000,
  };

  const {ticket, money, bonus} = PLAYER;

  return (
    <Container>
      <Row className="mt-6">
        <Col xs={12} lg={6}>
          <ProfileNavbar/>
          <Row>
            <div className="profile_store-info__wrap">
              <span className="profile_store-info__title">Билеты</span>
              <span className="profile_store-info__descr--small"><span className="tickets"></span>{ticket}</span>
            </div>
            <div className="profile_store-info__wrap">
              <span className="profile_store-info__title">Баланс</span>
              <span className="profile_store-info__descr--small">{money} ₽</span>
            </div>
            <div className="profile_store-info__wrap">
              <span className="profile_store-info__title">Бонусов</span>
              <span className="profile_store-info__descr--small">{bonus} ₽</span>
            </div>
          </Row>
        </Col>
        <Col xs={12}>
          <Row className="row--store">
            <StoreCards />
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default ProfileStore;