import React from 'react';
import Slider from "react-slick";
import { Container, Row, Card } from 'react-bootstrap'
import './selection_games.scss';

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

    const cards = gamesCardsInfo.map(({images, title, active}, index) =>  {
        if(active) {
            return (
                <a href='#' className='s-game-card' key={index}>
                    <Card className="game-card-body">
                        <Card.Img variant="top" src={require("../../images/games_card/" + images).default}/>
                        <Card.Title className='mb-0' as="h4">{title}</Card.Title>
                    </Card>
                </a>
            )
        } else {
            return (
                <div className='s-game-card s-game-card--disabled' key={index}>
                    <div className='s-game-card--disabled-text w-100 h-100 position-absolute d-flex align-items-center text-center'>
                        <span className='w-100'>Скоро</span>
                    </div>
                    <Card className="game-card-body">
                        <Card.Img variant="top" src={require("../../images/games_card/" + images).default}/>
                        <Card.Title className='mb-0' as="h4">{title}</Card.Title>
                    </Card>
                </div>
            )
        }
    });

const SelectionGames = () => {
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            lazyLoad: true
        };

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