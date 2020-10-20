import React from "react";
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-tournaments.scss';

const AdminTournaments = () => (
  <Container>
    <AdminNavbar/>
    <Row>
      <SelectionGames/>
    </Row>
    <Row>
      <Col sm={12} lg={8} className="mb-3">
        <div className="tournaments-list__search d-flex align-items-center bg-white mb-3 flex-md-nowrap flex-wrap">
          <Form.Control className="mb-1 mb-md-0" type="number" placeholder="ID лобби" />
          <Form.Control className="mb-1 mb-md-0" type="text" placeholder="Название" />
          <Form.Control className="mb-1 mb-md-0" type="date" placeholder="Время" />
          <Form.Control className="mb-1 mb-md-0" type="time" />
          <Button className="w-100 w-md-auto">Поиск</Button>
        </div>
        <div className="tournaments-list__wrapper mt-1 bg-white text-dark">
          <Button className="mr-1 mr-md-3 btn--refresh">Обновить</Button>
          <Button className="btn--clear">Очистить</Button>
          <Row className="mt-3 flex-nowrap">
            <Col sm={4}>
              <b>Название</b>
            </Col>
            <Col sm={4}>
              <b>Время</b>
            </Col>
            <Col sm={1}>
              <b>ID</b>
            </Col>
            <Col sm={1}>
              <b>Aw</b>
            </Col>
            <Col sm={1}>
              <b>Ent</b>
            </Col>
            <Col sm={1}>
              <b>Pl</b>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={4} md={12}>
        <div className="bg-white text-dark tournaments-list__wrapper">
        </div>
      </Col>
    </Row>
  </Container>
);

export default AdminTournaments;