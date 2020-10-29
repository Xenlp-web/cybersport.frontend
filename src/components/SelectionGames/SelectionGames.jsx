import React, {useCallback} from 'react';
import Slider from "react-slick";
import { Container, Row, Card } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

import './selection_games.scss';

import {loadGamesListAction} from "@app/api/requests/games";
import {gameListSelector} from "@app/selectors/gameListSelector";

const gamesCardsInfo = [
  {
    images: 'img-1.png',
    title: 'PUBG Mobile',
    active: true
  },
  {
    images: 'img-2.png',
    title: 'Call of Duty',
    active: false
  },
  {
    images: 'img-3.png',
    title: 'Mario Kart Tour',
    active: false
  },
  {
    images: 'img-4.png',
    title: 'Brawl Stars',
    active: false
  },
  {
    images: 'img-5.png',
    title: 'Garena Free Fire',
    active: false
  }
];

const cards = gamesCardsInfo.map(({images, title, active}, index) =>  (
  <div className='s-game-card s-game-card--disabled' key={index}>
    <Card className="game-card-body">
      <Card.Img variant="top" src={require("./../../images/games_card/" + images).default}/>
      <div className={active ? 'd-none' : 's-game-card--disabled-text w-100 h-100 position-absolute d-flex align-items-center text-center'}>
        <span className='w-100'>Скоро</span>
      </div>
    </Card>
    <Card.Title className={active ? 'mb-0' : 'mb-0 text-disabled'} as="h4">{title}</Card.Title>
  </div>
));

const SelectionGames = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
        },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }
      ]
  };

  const gameList = useSelector(gameListSelector);
  console.log(gameList);

  const dispatch = useDispatch();
  const getMsg = useCallback(() => {
    dispatch(loadGamesListAction());
  }, [dispatch]);
  getMsg();

  return(
    <Container className='container-games_card'>
      <h2>Выберите игру</h2>
      <Row>
        <Slider className='w-100 games_card' {...settings}>
          {cards}
        </Slider>
      </Row>
    </Container>
  )
};

export default SelectionGames;