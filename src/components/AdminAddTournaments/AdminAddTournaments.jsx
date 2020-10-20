import React from "react";
import {Container, Row, Form, Button} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-add-tournaments.scss';

const AdminAddTournaments = () => (
  <Container>
    <AdminNavbar/>
    <Row>
      <SelectionGames/>
    </Row>
    <div className="add_tournaments__wrapper bg-white">
      <Row className="add_tournaments__row">
        <Form.Control type="text" placeholder="Название" />
        <Form.Control type="text" placeholder="Пароль от лобби" />
        <Form.Control type="text" placeholder="Награда за киллы" />
        <Form.Control type="text" placeholder="Билетов за вход" />
        <Form.Control type="text" placeholder="Кол-во победителей" />
        <Form.Control type="text" placeholder="Награда за место" />
        <Form.Control type="text" placeholder="Награда за MVP" />
        <Form.Control type="text" placeholder="Игроков в лобби" value="100" />
        <Form.Control as="select">
          <option value="Эрангель" selected="">Эрангель</option>
          <option value="Санук">Санук</option>
          <option value="Мирамар">Мирамар</option>
          <option value="Викенди">Викенди</option>
          <option value="Ливик">Ливик</option>
        </Form.Control>
        <Form.Control as="select">
          <option value="Соло" selected="">Соло</option>
          <option value="Дуо">Дуо</option>
          <option value="Сквады">Сквады</option>
        </Form.Control>
        <Form.Control as="select">
          <option value="FPP">FPP</option>
          <option value="SPP">SPP</option>
          <option value="TPP" selected="">TPP</option>
        </Form.Control>
        <Form.Control type="date" />
        <Form.Control type="time" />
        <Form.Control type="text" placeholder="Трансляция" />
        <Form.Control type="text" placeholder="Картинка" />
      </Row>
      <div className="text-center mt-4">
        <Button className="btn-warning text-white mr-3 btn--add">Добавить</Button>
        <Button className="btn--clear">Очистить</Button>
      </div>
    </div>
  </Container>
);

export default AdminAddTournaments;