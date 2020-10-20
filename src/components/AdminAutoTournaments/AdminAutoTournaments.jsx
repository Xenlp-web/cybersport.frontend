import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-auto-tournaments.scss';

const AdminAutoTournaments = () => (
  <Container>
    <AdminNavbar/>
    <Row>
      <SelectionGames/>
    </Row>
    <Row className="t-auto_tuning-wrapper">
      <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
        <div className="t-auto_tuning bg-white">
          <div className="t-auto_tuning__header d-flex justify-content-between mb-3 mb-xl-4 text-dark">
            <span className="t-auto_tuning__title">Solo</span>
            <span className="t-auto_tuning__tournaments">30 турниров</span>
          </div>
          <ul className="t-auto_tuning-days nav mb-2 justify-content-between">
            <li className="t-auto_tuning-days__item active">ПН</li>
            <li className="t-auto_tuning-days__item">ВТ</li>
            <li className="t-auto_tuning-days__item">СР</li>
            <li className="t-auto_tuning-days__item">ЧТ</li>
            <li className="t-auto_tuning-days__item">ПТ</li>
            <li className="t-auto_tuning-days__item">СБ</li>
            <li className="t-auto_tuning-days__item">ВС</li>
          </ul>
          <p className="t-auto_tuning__descr text-dark">
            Выберите количество турниров в день
          </p>
          <ul className="t-auto_tuning-count_days nav mb-3 justify-content-between">
            <li className="t-auto_tuning-count_days__item active">1</li>
            <li className="t-auto_tuning-count_days__item">2</li>
            <li className="t-auto_tuning-count_days__item">3</li>
            <li className="t-auto_tuning-count_days__item">4</li>
            <li className="t-auto_tuning-count_days__item">5</li>
          </ul>
          <ul className="t-auto_tuning-time nav justify-content-between">
            <li className="t-auto_tuning-time__item active">16:00</li>
            <li className="t-auto_tuning-time__item">18:00</li>
            <li className="t-auto_tuning-time__item">19:00</li>
            <li className="t-auto_tuning-time__item">21:00</li>
            <li className="t-auto_tuning-time__item">23:00</li>
          </ul>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
        <div className="t-auto_tuning bg-white">
          <div className="t-auto_tuning__header d-flex justify-content-between mb-3 mb-xl-4 text-dark">
            <span className="t-auto_tuning__title">DUO</span>
            <span className="t-auto_tuning__tournaments">30 турниров</span>
          </div>
          <ul className="t-auto_tuning-days nav mb-2 justify-content-between">
            <li className="t-auto_tuning-days__item active">ПН</li>
            <li className="t-auto_tuning-days__item">ВТ</li>
            <li className="t-auto_tuning-days__item">СР</li>
            <li className="t-auto_tuning-days__item">ЧТ</li>
            <li className="t-auto_tuning-days__item">ПТ</li>
            <li className="t-auto_tuning-days__item">СБ</li>
            <li className="t-auto_tuning-days__item">ВС</li>
          </ul>
          <p className="t-auto_tuning__descr text-dark">
            Выберите количество турниров в день
          </p>
          <ul className="t-auto_tuning-count_days nav mb-3 justify-content-between">
            <li className="t-auto_tuning-count_days__item active">1</li>
            <li className="t-auto_tuning-count_days__item">2</li>
            <li className="t-auto_tuning-count_days__item">3</li>
            <li className="t-auto_tuning-count_days__item">4</li>
            <li className="t-auto_tuning-count_days__item">5</li>
          </ul>
          <ul className="t-auto_tuning-time nav justify-content-between">
            <li className="t-auto_tuning-time__item active">16:00</li>
            <li className="t-auto_tuning-time__item">18:00</li>
            <li className="t-auto_tuning-time__item">19:00</li>
            <li className="t-auto_tuning-time__item">21:00</li>
            <li className="t-auto_tuning-time__item">23:00</li>
          </ul>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
        <div className="t-auto_tuning bg-white">
          <div className="t-auto_tuning__header d-flex justify-content-between mb-3 mb-xl-4 text-dark">
            <span className="t-auto_tuning__title">Squad</span>
            <span className="t-auto_tuning__tournaments">30 турниров</span>
          </div>
          <ul className="t-auto_tuning-days nav mb-2 justify-content-between">
            <li className="t-auto_tuning-days__item active">ПН</li>
            <li className="t-auto_tuning-days__item">ВТ</li>
            <li className="t-auto_tuning-days__item">СР</li>
            <li className="t-auto_tuning-days__item">ЧТ</li>
            <li className="t-auto_tuning-days__item">ПТ</li>
            <li className="t-auto_tuning-days__item">СБ</li>
            <li className="t-auto_tuning-days__item">ВС</li>
          </ul>
          <p className="t-auto_tuning__descr text-dark">
            Выберите количество турниров в день
          </p>
          <ul className="t-auto_tuning-count_days nav mb-3 justify-content-between">
            <li className="t-auto_tuning-count_days__item active">1</li>
            <li className="t-auto_tuning-count_days__item">2</li>
            <li className="t-auto_tuning-count_days__item">3</li>
            <li className="t-auto_tuning-count_days__item">4</li>
            <li className="t-auto_tuning-count_days__item">5</li>
          </ul>
          <ul className="t-auto_tuning-time nav justify-content-between">
            <li className="t-auto_tuning-time__item active">16:00</li>
            <li className="t-auto_tuning-time__item">18:00</li>
            <li className="t-auto_tuning-time__item">19:00</li>
            <li className="t-auto_tuning-time__item">21:00</li>
            <li className="t-auto_tuning-time__item">23:00</li>
          </ul>
        </div>
      </Col>
    </Row>
    <div className="row">
      <Col sm={12} md={6} xl={4} className="d-flex justify-content-center">
        <div className="t-auto_card-settings w-100 bg-white text-dark">
          <div className="d-flex justify-content-between mb-3">
            <div className="t-auto_card-settings__title">
              Arcade Cup #4
              <span className="edit"> </span>
            </div>
            <div className="t-auto_card-settings__time">
              <span className="time"> </span>
              16:00
              <span className="edit"> </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Награда за килл</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="30"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Кол-во победителей</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="20"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Награда за ТОП</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="150"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Стоимость в билетах</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '10px'}} placeholder="2"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">MVP</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="10"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Макс. кол-во игроков</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="100"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Карта</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '155px'}} placeholder="Эрангель / (череда)"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="t-auto_card-settings__label">Вид</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="TPP"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} xl={4} className="d-flex justify-content-center">
        <div className="t-auto_card-settings w-100 bg-white text-dark">
          <div className="d-flex justify-content-between mb-3">
            <div className="t-auto_card-settings__title">
              Arcade Cup #4
              <span className="edit"> </span>
            </div>
            <div className="t-auto_card-settings__time">
              <span className="time"> </span>
              16:00
              <span className="edit"> </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Награда за килл</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="30"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Кол-во победителей</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="20"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Награда за ТОП</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="150"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Стоимость в билетах</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '10px'}} placeholder="2"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">MVP</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="10"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Макс. кол-во игроков</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="100"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Карта</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '155px'}} placeholder="Эрангель / (череда)"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="t-auto_card-settings__label">Вид</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="TPP"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} xl={4} className="d-flex justify-content-center">
        <div className="t-auto_card-settings w-100 bg-white text-dark">
          <div className="d-flex justify-content-between mb-3">
            <div className="t-auto_card-settings__title">
              Arcade Cup #4
              <span className="edit"> </span>
            </div>
            <div className="t-auto_card-settings__time">
              <span className="time"> </span>
              16:00
              <span className="edit"> </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Награда за килл</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="30"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Кол-во победителей</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="20"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Награда за ТОП</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="150"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Стоимость в билетах</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '10px'}} placeholder="2"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">MVP</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '20px'}} placeholder="10"/>₽
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Макс. кол-во игроков</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="100"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="t-auto_card-settings__label">Карта</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '155px'}} placeholder="Эрангель / (череда)"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="t-auto_card-settings__label">Вид</span>
            <div className="t-auto_card-settings-change">
              <input type="text" style={{width: '30px'}} placeholder="TPP"/>
              <button className="btn btn-change">Изменить</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Container>
);

export default AdminAutoTournaments;