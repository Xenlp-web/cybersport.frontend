import React, {useState, useEffect, useMemo} from "react";
import {Col, Container, Row, Button, Form, Table} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-tournaments.scss';
import useInit from "@app/utils/init";
import {
  forcedLoadTournamentsForAdminDataAction,
  forcedLoadTournamentOptionsForAdminDataAction,
  getTournamentOptionsForAdminResponseSelector
} from "@app/api/requests/changeTournament";
import {getTournamentsForAdminSelector, getTournamentOptionsForAdminSelector} from "@app/selectors/tournamentsForAdminSelector";
import {useSelector} from "react-redux";
import store from '@app/store/store';

const Test = (props) => {
  console.log(props, 'props=>');
  if (!!props.infoTournament) {
  const {
    ended,
    game_id,
    id,
    img,
    important,
    region,
    start_time,
    stream,
    tickets,
    title
  } = props.infoTournament;

    return (
      <>
        <div className="bg-white text-dark tournaments-list__wrapper">
          <div className="tournament-list__header font-weight-bold mb-3">
          <span className="tournament-list__header-title">
            Название: <span className="text-danger">{title}</span>
          </span>
            <span className="tournament-list__header-title float-right">
            ID: <span className="text-danger">{id}</span>
          </span>
          </div>
          <div className="tournament-list__item">
            <span>Окончен</span>
            <span>{(ended === 0) ? 'не окончен' : 'окончен'}</span>
          </div>
          <div className="tournament-list__item">
            <span>Ид игры</span>
            <span>{game_id}</span>
          </div>
          <div className="tournament-list__item">
            <span>Имя изображения</span>
            <span>{img}</span>
          </div>
          <div className="tournament-list__item">
            <span>Важность</span>
            <span>{(important === 0) ? 'обычный' : 'важный'}</span>
          </div>
          <div className="tournament-list__item">
            <span>Регион</span>
            <span>{(region === 0) ? 'us' : 'eu'}</span>
          </div>
          <div className="tournament-list__item">
            <span>Дата и время</span>
            <span>{start_time}</span>
          </div>
          <div className="tournament-list__item">
            <span>Ссылка на стрим</span>
            <span>{stream}</span>
          </div>
          <div className="tournament-list__item">
            <span>Цена за вход</span>
            <span>{tickets}</span>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div>
        Выберите турнир из списка
      </div>
    )
  }
};

const AdminTournaments = () => {
  const [activeTournament, setActiveTournament] = useState([]);
  const [infoActiveTournament, setInfoActiveTournament] = useState({});

  const tournamentsForAdminResponse = useSelector(getTournamentsForAdminSelector);
  // const tournamentOptionsForAdminResponse = useSelector(getTournamentOptionsForAdminSelector);
  // const tournamentOptionsForAdminResponse = useSelector(getTournamentOptionsForAdminResponseSelector);
  let rowTournaments;

  useInit(() => forcedLoadTournamentsForAdminDataAction(), []);
  useInit(() => forcedLoadTournamentOptionsForAdminDataAction({tournament_id: activeTournament}), [activeTournament]);

    useEffect(() => {
      if (activeTournament.length !== 0) {
        let tournamentInfo = store.getState().requests.responses.get_tournaments_for_admin;

        if (tournamentInfo === null || !!tournamentInfo) {
          tournamentInfo = tournamentInfo.response.tournaments[activeTournament];

          setInfoActiveTournament(tournamentInfo);
        }
      }
    }, [activeTournament]);

  useEffect(() => {
    // console.log('active =>', tournamentOptionsForAdminResponse);
  }, [activeTournament]);

  document.addEventListener("DOMContentLoaded", () => {
    const tournamentsWrapper = document.querySelector('.tournaments-info-wrapper');

    tournamentsWrapper.addEventListener("click",(event) => {
      const target = event.target;

      if (target.closest('.tournaments-info-item')) {
        setActiveTournament(target.closest('.tournaments-info-item').dataset.id);
      }
    });
  });

  if (tournamentsForAdminResponse.lenght !== 0) {
    rowTournaments = tournamentsForAdminResponse.map(({id, title, start_time}, index) => {
      return (
        <tr key={index} data-id={id} className="tournaments-info-item">
          <td>
            {title}
          </td>
          <td>
            {start_time.substr(10, 6)}
          </td>
          <td>
            {id}
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
      )
    });
  } else {
    rowTournaments = <Row className="mt-3 flex-nowrap">
                      <p>Нет турниров</p>
                     </Row>
  }

  return (
    <Container>
      <AdminNavbar/>
      <Row>
        <SelectionGames/>
      </Row>
      <Row>
        <Col sm={12} lg={8} className="mb-3">
          <div className="tournaments-list__search d-flex align-items-center bg-white mb-3 flex-md-nowrap flex-wrap">
            <Form.Control className="mb-1 mb-md-0" type="number" placeholder="ID лобби"/>
            <Form.Control className="mb-1 mb-md-0" type="text" placeholder="Название"/>
            <Form.Control className="mb-1 mb-md-0" type="date" placeholder="Время"/>
            <Form.Control className="mb-1 mb-md-0" type="time"/>
            <Button className="w-100 w-md-auto">Поиск</Button>
          </div>
          <div className="tournaments-list__wrapper mt-1 bg-white text-dark">
            <Button className="mr-1 mr-md-3 btn--refresh">Обновить</Button>
            <Button className="btn--clear">Очистить</Button>
            <Table hover className="bg-white mt-3 overflow-hidden">
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Время</th>
                  <th>ID</th>
                  <th>Aw</th>
                  <th>Ent</th>
                  <th>Pl</th>
                </tr>
              </thead>
              <tbody className="tournaments-info-wrapper">
                {rowTournaments}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <Test infoTournament={infoActiveTournament} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminTournaments;