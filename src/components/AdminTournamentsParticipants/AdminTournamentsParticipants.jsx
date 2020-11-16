import React, {useState, useCallback} from "react";
import {Form, Button, Col, Row, Container} from "react-bootstrap";
import './admin-tournaments-participants.scss';
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import {useDispatch} from "react-redux";
import {forcedLoadTournamentParticipantsDataAction} from "@app/api/requests/tournamentParticipants";

const AdminTournamentsParticipants = () => {
  const [idTournament, setIdTournament] = useState([]);
  const dispatch = useDispatch();

  const showUsersTournament = () => {
    dispatch(forcedLoadTournamentParticipantsDataAction({tournament_id: idTournament}))
  };

  return (
    <Container>
      <AdminNavbar/>
      <Row>
        <SelectionGames/>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <Form.Group className="participants-tournament d-flex align-items-center bg-white">
            <Form.Control type="text" placeholder="ID турнира"
                          onChange={(event) => setIdTournament(event.target.value)}
            />
            <Button variant="warning" className="text-white px-3" onClick={showUsersTournament}>Загрузить</Button>
            <Button className="px-3">Очистить</Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminTournamentsParticipants;