import React from "react";
import {Form, Button, Col, Row, Container, Nav} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-users.scss';

const AdminUsers = () => (
  <Container>
    <AdminNavbar/>
    <Row>
      <SelectionGames/>
    </Row>
    <Row>
      <Col lg={6} md={12} className="mb-3">
        <Form.Group className="participants-tournament d-flex align-items-center bg-white">
          <Form.Control type="text" placeholder="ID турнира" />
          <Button variant="warning" className="text-white px-3">Загрузить</Button>
          <Button className="px-3">Очистить</Button>
        </Form.Group>
      </Col>
    </Row>
    <div className="row text-dark">
      <Col lg={7} md={12} className="mb-4">
        <div className="users-wrapper bg-white">
        </div>
      </Col>
      <Col lg={5} md={12}>
        <div className="users-wrapper bg-white">
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="На баланс" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="Бонусы" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="Билеты" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="Реферальный класс" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
          <Nav as="ul" className="user-list">
            <Nav.Item>Реферальные классы:</Nav.Item>
            <Nav.Item>0 - стандартный</Nav.Item>
            <Nav.Item>1 - 5% от рефералов, 2 ранг рефералам</Nav.Item>
            <Nav.Item>2 - 10% от рефералов, 2 ранг рефералам</Nav.Item>
            <Nav.Item>3 - 0% от рефералов, 2 ранг рефералам</Nav.Item>
          </Nav>
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="Реферальный код" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="Рейтинг" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
          <Form.Group className="users-row">
            <Form.Control type="text" placeholder="Бан" />
            <Button variant="warning" className="text-white px-3">Отправить</Button>
          </Form.Group>
        </div>
      </Col>
    </div>
  </Container>
);

export default AdminUsers;