import React, {useCallback, useState} from 'react';
import {Row, Container, Col, InputGroup, FormControl, Button, Form} from 'react-bootstrap';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar.jsx";
import HistoryTournamentsCards from "../HistoryTournaments/HistoryTournaments.jsx";
import './profile-settings.scss';
import {useDispatch, useSelector} from "react-redux";
import {userDataSelector} from "@app/selectors/userDataSelector";
import {doChangeUserInfoRequestAction} from "@app/api/requests/changeUserInfo";

const ProfileSettings = () => {
  const userData = useSelector(userDataSelector);
  const {
    email,
    nickname,
  } = userData;

  const [userEmail, setUserEmail] = useState(email);
  const [userNickname, setUserNickname] = useState(nickname);
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

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