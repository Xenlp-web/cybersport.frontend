import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import history from "@app/history";
import { loadTournamentInfoDataAction } from "@app/api/requests/changeTournament";
import useInit from "@app/utils/init";
import { useDispatch, useSelector } from "react-redux";
import { getTournamentOptionsForPageSelector } from "@app/selectors/tournamentsForAdminSelector";
import {
  doCancelRegistrationTournamentRequestAction,
  doRegistrationTournamentRequestAction
} from "@app/api/requests/registrationTournament";

import './page-tournament.scss';

const PageTournament = () => {
  const game_id = 1;
  const location = history.location.pathname;
  const pageName = '/tournament/';
  const idTournament = location.replace(pageName, '');

  useInit(() => loadTournamentInfoDataAction({tournament_id: idTournament, game_id: game_id}), [idTournament, game_id]);

  let tournamentInfo = useSelector(getTournamentOptionsForPageSelector);

  const {
    // created_at: null
    current_players,
    // ended: 0
    // game_id: 1
    // id: 14
    // img,
    // important: 0
    kill_award,
    // lobby_id: ""
    // lobby_pass: "123"
    // map: "Эрангель"
    max_players,
    mode,
    // mvp_award: 123
    // placement_award: 123
    pov,
    // region: 0
    start_time,
    // stream: "gdfg"
    tickets,
    title,
    participation
    // tournament_id: 18
    // updated_at: null
    // winners: 1
  } = tournamentInfo[0];

  const dispatch = useDispatch();

  const tournamentJoin = useCallback(() => {
    dispatch(doRegistrationTournamentRequestAction({
      tournament_id: Number(idTournament),
      game_id: game_id
    }));
  }, [idTournament, game_id]);

  const tournamentCancel = useCallback(() => {
    dispatch(doCancelRegistrationTournamentRequestAction({
      tournament_id: Number(idTournament),
      game_id: game_id
    }))
  }, [idTournament, game_id]);

  return (
    <Container className="pt-6">
      <Row>
        <Col sm={12} md={6} xl={4}>
          <div className="page-tournament-images" style={{backgroundImage: `url(${require("@app/images/tournament_cards/img-1.jpg").default})`}}>
          </div>
        </Col>
        <Col xs={4} className="page-tournament-info d-flex flex-column align-items-start">
          <h1 className="page-tournament-info__title">{title}</h1>
          <div className="d-flex justify-content-between mb-4 w-100 align-items-center">
            <span className="page-tournament-info__text text-light-gray">{mode} {pov}</span>
            <span className="page-tournament-info__time text-danger">{start_time.substr(10, 6)}</span>
          </div>
          <div className="page-tournament-info__text font-weight-bold mb-auto">
            {current_players}/{max_players} участников
          </div>
          <span className="btn btn-light page-tournament-info__info-kill mr-auto mb-4">{kill_award}₽ за килл</span>
          <Button variant={participation !== null ? 'light' : 'danger'}
                  onClick={participation !== null ? tournamentCancel : tournamentJoin}
          >
            {participation !== null ? 'Отказать от участия' :
              'Участвовать за ' + tickets + ' билет'}
          </Button>
        </Col>
        <Col xs={4} className="page-tournament-rules">
          <div className="page-tournament-rules__wrapper bg-dark">
            <h2>Правила участия в турнире</h2>
            <p className="page-tournament-rules__text">Тиминг в игре запрещен </p>
            <p className="page-tournament-rules__text">Не забудь обновить карту.</p>
            <p className="page-tournament-rules__text">Аккаунты, у которых уровень ниже 30, к турниру не допускаются.</p>
            <p className="page-tournament-rules__text">Игра на эмуляторах запрещена!</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default PageTournament;