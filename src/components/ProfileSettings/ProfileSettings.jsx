import React from 'react';
import {Row, Container, Col, InputGroup, FormControl, Button, Form} from 'react-bootstrap';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar.jsx";
import HistoryTournamentsCards from "../HistoryTournaments/HistoryTournaments.jsx";
import './profile-settings.scss';

const ProfileSettings = () => {
  const PLAYER = {
    email: 'test@mail.ru',
    nickInGame: 'SuperStrelok',
    idInGame: '234234',
    password: ''
  };

  const {email, nickInGame, idInGame} = PLAYER;

  return (
    <Container>
      <Row className="mt-6">
        <Col xs={12} lg={8} xl={6} className="mb-4 mb-xl-0">
          <ProfileNavbar/>
          <div className="profile-setting">
            <h6 className='mb-4'>Настройки профиля</h6>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Почта</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder={email}
                  aria-label={email}
                  aria-describedby="email"
                  type="email"
                />
                <InputGroup.Append>
                  <Button variant="light">Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ник в PUBG mobile</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder={nickInGame}
                  aria-label={nickInGame}
                  aria-describedby="Ник в PUBG mobile"
                  type="number"
                />
                <InputGroup.Append>
                  <Button variant="light">Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>ID в PUBG mobile</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder={idInGame}
                  aria-label={idInGame}
                  aria-describedby="ID в PUBG mobile"
                  type="number"
                />
                <InputGroup.Append>
                  <Button variant="light">Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Пароль</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder='********'
                  aria-label='password'
                  aria-describedby="email"
                  type="password"
                />
                <InputGroup.Append>
                  <Button variant="light">Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </div>
        </Col>
        <Col xs={12} lg={8} xl={6} className="d-none d-md-block">
          <p className="mb-4 font-weight-bolder">История сыгранных турниров</p>
          <div className='h-tournaments-wrapper row flex-column'>
            <HistoryTournamentsCards />
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default ProfileSettings;