import React, {useCallback} from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {doRegistrationTournamentRequestAction, doCancelRegistrationTournamentRequestAction} from "@app/api/requests/registrationTournament";

import './tournaments-cards.scss';

const game_id = 1;

const TournamentsCards = (props) => {
  const CardInfo = props.tournamentCardInfo;
  const typeCard = props.type;

  const dispatch = useDispatch();

  const tournamentJoin = useCallback((tournament_id) => {
    dispatch(doRegistrationTournamentRequestAction({
      tournament_id: Number(tournament_id),
      game_id: game_id
    }))
  }, []);

  const tournamentCancel = useCallback((tournament_id) => {
    dispatch(doCancelRegistrationTournamentRequestAction({
      tournament_id: Number(tournament_id),
      game_id: game_id
    }))
  }, []);

    const TournamentsCard = CardInfo.map(({
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
      pov,
      participation,
      lobby_pass,
      lobby_id
     }, index) => {
            return (
                <Col key={index} className={'t-card t-card--' + typeCard} data-important={important}>
                    <Card>
                        <div className="t-card-head">
                          <Card.Img title={img} src={require("../../images/tournament_cards/img-1.jpg").default}/>
                            <div className={(typeCard === 'past') ? 'd-none':
                              participation !== null ? 't-card-lobby position-absolute' : 'd-none'}>
                              <div className="t-card-lobby__title">Вы участвуете</div>
                              <div className="t-card-lobby__info">
                                <b>ID комнаты: </b> {lobby_id}
                              </div>
                              <div className="t-card-lobby__info">
                                <b>Пароль: </b> {lobby_pass}
                              </div>
                            </div>
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
                                <span className={(typeCard === 'past') ? 't-card__price-kill text-gray' :
                                  't-card__price-kill text-danger'}>{kill_award}₽ за килл
                                </span>
                            </div>
                            <Card.Footer>
                                <Button variant={(typeCard === 'past') ? 'secondary' : participation !== null ? 'light' :'danger'}
                                        data-id-tournament={tournament_id}
                                        onClick={(typeCard === 'past') ? '' :
                                          participation !== null ?
                                            (event) => tournamentCancel(event.target.getAttribute('data-id-tournament')) :
                                            (event) => tournamentJoin(event.target.getAttribute('data-id-tournament'))

                                        }
                                >
                                  {(typeCard === 'past') ? 'Завершен' :
                                    participation !== null ? 'Отказать от участия' :
                                      'Участвовать за ' + tickets + ' билет'
                                  }
                                </Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            )
    });

    return (
       TournamentsCard
    )
};

export default TournamentsCards;
