import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

import './tournaments-cards.scss';

const TournamentsCards = (props) => {
    const CardInfo = props.tournamentCardInfoToday;
    const typeCard = props.type;
    const TornamentsCard = CardInfo.map(({
        images,
        currentPlayers,
        maxPlayers,
        title,
        mode,
        type,
        time,
        priceForKill,
        costTickets,
        important
     }, index) => {
            return (
                <Col key={index} className={'t-card t-card--' + typeCard}>
                    <Card>
                        <div className="t-card-head">
                            <Card.Img src={require("../../images/tournament_cards/" + images).default}/>
                        </div>
                        <Card.Body>
                            <div className="t-card-group">
                                <span className="t-card__players text-light-gray">{currentPlayers}/{maxPlayers} участников</span>
                                    <span className="t-card__type text-light-gray">{type}</span>
                                </div>
                            <div className="t-card-group h4">
                                <span className="t-card__title">{title}</span>
                                <span className="t-card__time text-danger"><span className="clock"> </span>{time}</span>
                            </div>
                            <div className="t-card-group">
                                <span className="t-card__mode text-light-gray">{mode}</span>
                                <span className="t-card__price-kill">{priceForKill}₽ за килл</span>
                            </div>
                            <Card.Footer>
                                <Button variant="danger">Участвовать за {costTickets} билет</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            )
    });

    return (
       TornamentsCard
    )
};

export default TournamentsCards;