import React, { useState } from "react";
import {Col, Container, Row, Button, Form, Table} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import AdminTournamentChangeInfo from "../AdminTournamentChangeInfo/AdminTournamentChangeInfo.jsx"
import './admin-tournaments.scss';
import useInit from "@app/utils/init";
import {
  forcedLoadTournamentsForAdminDataAction,
  forcedLoadTournamentOptionsForAdminDataAction
} from "@app/api/requests/changeTournament";
import {getTournamentsForAdminSelector} from "@app/selectors/tournamentsForAdminSelector";
import {useSelector} from "react-redux";
import AdminTournamentInfo from "../AdminTournamentInfo/AdminTournamentInfo.jsx";

const AdminTournaments = () => {
  const [activeTournament, setActiveTournament] = useState('');

  useInit(() => forcedLoadTournamentsForAdminDataAction(), []);
  useInit(() => forcedLoadTournamentOptionsForAdminDataAction({tournament_id: activeTournament}), [activeTournament]);

  const RowTournaments = () => {
    const tournamentsForAdminResponse = useSelector(getTournamentsForAdminSelector);

    if (tournamentsForAdminResponse.lenght !== 0) {
      const tournamentRows = tournamentsForAdminResponse.map(({id, title, start_time}, index) => {
        return (
          <tr onClick={() => {
              setActiveTournament(id)
              }} key={index} data-id={id} className="tournaments-info-item">
            <td>{title}</td>
            <td>{start_time.substr(10, 6)}</td>
            <td>{id}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )
      });

      return tournamentRows;
    } else {
      return <tr className="mt-3 flex-nowrap"><td>Нет турниров</td></tr>
    }
  };

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
            {/*<Button className="mr-1 mr-md-3" onClick={() => reset()}>Обновить</Button>*/}
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
                <RowTournaments />
              </tbody>
            </Table>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <AdminTournamentInfo />
        </Col>
      </Row>
      <Row>
        <Col lg={5} md={12}>
          <AdminTournamentChangeInfo activeTournament={activeTournament} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminTournaments;