import React, {useState, useEffect} from "react";
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
import AdminTournamentInfo from "../AdminTournamentInfo/AdminTournamentInfo.jsx";
import store from '@app/store/store';

const AdminTournaments = () => {
  const [infoActiveTournament, setInfoActiveTournament] = useState({});
  const [activeTournament, setActiveTournament] = useState([]);

  const tournamentsForAdminResponse = useSelector(getTournamentsForAdminSelector);
  // const tournamentOptionsForAdminResponse = useSelector(getTournamentOptionsForAdminSelector);
  // const tournamentOptionsForAdminResponse = useSelector(getTournamentOptionsForAdminResponseSelector);
  let rowTournaments;

  const infoTournamentsInfo = () => {
    if (activeTournament.length !== 0) {
      let tournamentInfo = store.getState().requests.responses.get_tournament_options_for_admin.response;

      if (tournamentInfo === null || !!tournamentInfo) {
        tournamentInfo = tournamentInfo.tournamentInfo[0];

        setInfoActiveTournament(tournamentInfo);
      }
    }
  };

  useInit(() => forcedLoadTournamentsForAdminDataAction(), []);
  useInit(() => forcedLoadTournamentOptionsForAdminDataAction({tournament_id: activeTournament}), [activeTournament]);

  if (tournamentsForAdminResponse.lenght !== 0) {
    rowTournaments = tournamentsForAdminResponse.map(({id, title, start_time}, index) => {
      return (
        <tr onClick={ () => {
          setActiveTournament(id);
          infoTournamentsInfo();
        }} key={index} data-id={id} className="tournaments-info-item">
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
            {/*<Button className="mr-1 mr-md-3 btn--refresh">Обновить</Button>*/}
            {/*<Button className="btn--clear">Очистить</Button>*/}
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
          <AdminTournamentInfo infoTournament={infoActiveTournament} />
        </Col>
      </Row>
      <Row>
        <Col lg={5} md={12}>
          <div className="users-wrapper bg-white">
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="ID лобби" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Пароль" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Трансляция" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Картинка" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Максимум игроков" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Заголовок" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="До открытия записи" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Перенести по метке" />
              <Button variant="warning" className="text-white px-3">Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Button variant="warning" className="text-white px-3">Удалить турнир</Button>
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminTournaments;