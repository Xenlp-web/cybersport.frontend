import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

import './tournaments-cards.scss';

const TournamentsCards = (props) => {
    const CardInfo = props.tournamentCardInfo;
    const typeCard = props.type;
    const TornamentsCard = CardInfo.map(({
      img,
      tournament_id,
      important,
      start_time,
      tickets,
      title,
      mode,
      current_players,
      max_players,
      map,
      kill_award,
      pov

     }, index) => {
            return (
                <Col key={index} className={'t-card t-card--' + typeCard} data-important={important}>
                    <Card>
                        <div className="t-card-head">
                            <Card.Img title={img} src={require("../../images/tournament_cards/img-1.jpg").default}/>
                        </div>
                        <Card.Body>
                            <div className="t-card-group">
                                <span className="t-card__players text-light-gray">{current_players}/{max_players} участников</span>
                                    <span className="t-card__type text-light-gray">{mode  + ' ' + pov}</span>
                                </div>
                            <div className="t-card-group h4">
                                <span className="t-card__title">{title}</span>
                                <span className={(typeCard === 'past') ? 't-card__time text-gray' : 't-card__time text-danger'}>
                                  <span className="clock"> </span>{start_time.substr(10, 6)}
                                </span>
                            </div>
                            <div className="t-card-group">
                                <span className="t-card__mode text-light-gray">{map}</span>
                                <span className={(typeCard === 'past') ? 't-card__price-kill text-gray' : 't-card__price-kill text-danger'}>{kill_award}₽ за килл</span>
                            </div>
                            <Card.Footer>
                                <Button variant={(typeCard === 'past') ? 'secondary' : 'danger'}
                                        data-id-tournament={tournament_id}
                                        onClick={(event) => console.log(event.target.getAttribute('data-id-tournament'))}
                                >{(typeCard === 'past') ? 'Завершен' :
                                  'Участвовать за ' + tickets + ' билет'}</Button>
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
