import React from "react";
import {Form, Button, Col, Row, Container} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-add-results-tournaments.scss';

const AdminAddResultsTournaments = () => (
  <Container>
    <AdminNavbar/>
    <Row>
      <SelectionGames/>
    </Row>
    <Row className="mb-3">
      <Col lg={5} md={6} className="mb-3">
        <Form.Group className="participants-tournament d-flex align-items-center bg-white">
          <Form.Control type="text" placeholder="ID турнира" />
          <Button className="px-3">Поиск</Button>
        </Form.Group>
      </Col>
      <Col sm={12} className="mb-3 tournaments-list__btn-group">
        <Button variant="warning" className="mr-2 text-white">Отправить</Button>
        <Button variant="warning" className="mr-2 text-white">Результаты</Button>
        <Button variant="danger">Очистить</Button>
      </Col>
    </Row>
    <Row>
      <Col sm={12} lg={8}>
        <div className="participants-tournament bg-white text-dark d-flex mb-4 flex-column flex-md-row">
          <Col sm={3}>ID: </Col>
          <Col sm={3}>Название: </Col>
          <Col sm={3}>Режим: </Col>
          <Col sm={3}>Участников: </Col>
        </div>
        <div className="participants-tournament tournaments-list__result d-flex align-items-center bg-white mb-4 flex-column flex-md-row">
          <Form.Control className="mb-1 mb-md-0" type="text" placeholder="Ник PUBG" />
          <Form.Control className="mb-1 mb-md-0" type="number" placeholder="Очки" />
          <Form.Control className="mb-1 mb-md-0" type="number" placeholder="PUBG ID" />
          <Button variant="warning" className="w-100 w-md-auto text-white">Добавить</Button>
        </div>
      </Col>
      <Col sm={12} lg={4}>
        <div className="participants-tournament bg-white text-dark">
        </div>
      </Col>
    </Row>
  </Container>
);

export default AdminAddResultsTournaments;