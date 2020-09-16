import React from 'react';
import Slider from "react-slick";
import {Container, Row, Jumbotron, Button} from 'react-bootstrap'
import './tournament-banner.scss';

    const tournamentBannerInfo = [
        {
            images: 'img-1.png',
            title: 'PUBG Mobile',
            stage: 'Финал',
            date: '22 августа, в 18:50',
            mode: '1 против всех',
            award: 'Призовой фонд 10 500 руб.',
            price: 1
        },
        {
            images: 'img-1.png',
            title: 'Arcade Cup #10',
            stage: 'Финал',
            date: '22 августа, в 18:50',
            mode: '1 против всех',
            award: 'Призовой фонд 10 500 руб.',
            price: 1
        }
    ];

    const slides = tournamentBannerInfo.map(({images, title, stage, date, mode, award, price}, index) =>  (
        <Container>
            <Jumbotron fluid>
                <div className='text-white jumbotron__text-content d-flex align-items-start flex-column'>
                    <p className="tournament-banner__date">
                        {date}
                    </p>
                    <h1 className='jumbotron__title'>
                        {title}
                    </h1>
                    <p className='tournament-banner__stage text-danger'>
                        {stage}
                    </p>
                    <div className="d-flex align-items-center w-100 justify-content-between">
                        <span className="tournament-banner__mode">
                            {mode}
                        </span>
                        <span className="tournament-banner__award">
                            {award}
                        </span>
                    </div>
                    <Button variant="danger">Участвовать за {price} билет</Button>
                </div>
            </Jumbotron>
        </Container>
    ));

const TournamentBanner = () => {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            dots: true
        };

        return(
            <Container>
                <Row>
                    <Slider className='w-100 tournament-banner' {...settings}>
                        {slides}
                    </Slider>
                </Row>
            </Container>
        )
};

export default TournamentBanner;