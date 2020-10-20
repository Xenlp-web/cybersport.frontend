import React from "react";
import {Form, Button, Col, Row, Container} from "react-bootstrap";
import './admin-tournaments-participants.scss';
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";

const AdminTournamentsParticipants = () => (
  <Container>
    <AdminNavbar/>
    <Row>
      <SelectionGames/>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Form.Group className="participants-tournament d-flex align-items-center bg-white">
          <Form.Control type="text" placeholder="ID турнира" />
          <Button variant="warning" className="text-white px-3">Загрузить</Button>
          <Button className="px-3">Очистить</Button>
        </Form.Group>
      </Col>
    </Row>
  </Container>
);

export default AdminTournamentsParticipants;