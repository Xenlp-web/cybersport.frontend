import React, { useCallback, useState } from 'react';
import {Row, Container, Col, InputGroup, FormControl, Button, Form} from 'react-bootstrap';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar.jsx";
import HistoryTournamentsCards from "../HistoryTournaments/HistoryTournaments.jsx";
import './profile-settings.scss';
import { useDispatch, useSelector } from "react-redux";
import { userDataSelector } from "@app/selectors/userDataSelector";
import { userDataGameInfoSelector } from "@app/selectors/gameInfoSelector";
import { doChangeUserInfoRequestAction } from "@app/api/requests/changeUserInfo";
import { doChangeGameInfoRequestAction, loadGameInfoAction } from "@app/api/requests/addGameInfo";
import useInit from "@app/utils/init";

const ProfileSettings = () => {
  const userData = useSelector(userDataSelector);
  const userDataGameInfo = useSelector(userDataGameInfoSelector);
  const game_id = 1;

  const {
    email,
    nickname
  } = userData;

  const {
    player_id
  } = userDataGameInfo;

  const [userEmail, setUserEmail] = useState(email);
  const [userNickname, setUserNickname] = useState(nickname);
  const [userPassword, setUserPassword] = useState('');
  const [pubg, setIdPubg] = useState(player_id);

  const dispatch = useDispatch();

  useInit(() => loadGameInfoAction({
    game_id: game_id
  }), [game_id]);

  const changePubgId = useCallback( () => {
    dispatch(doChangeGameInfoRequestAction({
      game_info: {
        player_id: pubg
      },
      game_id: game_id
    }));
  }, [userEmail, pubg]);

  const changeUserEmail = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_info: {
        email: userEmail
      }
    }));
  }, [userEmail]);

  const changeUserNickname = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_info: {
        nickname: userNickname
      }
    }));
  }, [userNickname]);

  const changeUserPassword = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_info: {
        password: userPassword
      }
    }));
  }, [userPassword]);

  return (
    <Container className="container--indent">
      <Row className="mt-6">
        <Col xs={12} xl={6} className="mb-4 mb-xl-0">
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
                  onChange={(event) => setUserEmail(event.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="light" onClick={changeUserEmail}>Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Ник</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder={nickname}
                  aria-label={nickname}
                  aria-describedby="Ник"
                  type="text"
                  onChange={(event) => setUserNickname(event.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="light" onClick={changeUserNickname}>Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>ИД для PUBG</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder={player_id}
                  aria-label={player_id}
                  aria-describedby="Ид PUBG"
                  type="text"
                  onChange={(event) => setIdPubg(event.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="light" onClick={changePubgId}>Изменить</Button>
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
                  onChange={(event) => setUserPassword(event.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="light" onClick={changeUserPassword}>Изменить</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </div>
        </Col>
        <Col xs={12} xl={6} className="d-none d-md-block">
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