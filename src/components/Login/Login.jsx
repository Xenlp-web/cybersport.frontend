import React, { useState, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {Modal, Button, Form} from 'react-bootstrap';

import {doSignInRequestAction} from '@app/api/requests/sign-in';
import {loadAllRegionsDataAction} from '@app/api/requests/regions';
import {doRegistrationRequestAction} from '@app/api/requests/registration';
import {allRegionsSelector} from '@app/selectors/allRegionsSelector';

import './login.scss';

const Login = (props) => {
  const setSingInShow = props.setSingInShow;
  const singInShow = props.singInShow;
  const setRegistrationShow = props.setRegistrationShow;
  const registrationShow = props.registrationShow;

  const [userNickname, setUserNickname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
  const [userLocationId, setUserLocationId] = useState(0);

  const dispatch = useDispatch();

  const signIn = useCallback( () => {
    dispatch(doSignInRequestAction({
      email: userEmail,
      password: userPassword
    }));
  }, [userEmail, userPassword]);

  const getRegionsAll = useCallback(() => {
    dispatch(loadAllRegionsDataAction());
  }, []);

  const registrationSubmit = useCallback(() => {
    dispatch(doRegistrationRequestAction({
      nickname: userNickname,
      email: userEmail,
      password: userPassword,
      password_confirm: userPasswordConfirm,
      region_id: userLocationId
    }));
  }, [userEmail, userPassword, userPasswordConfirm, userLocationId]);

  const regionsAllResponse = useSelector(allRegionsSelector);
  const regionsArrays = Object.entries(regionsAllResponse);
  let regionInfo = [];

  regionsArrays.forEach(([key, value]) => {
    regionInfo = [...regionInfo, value];

    return regionInfo;
  });

  const optionsRegions = regionInfo.map(({id, region}, index) => (
    <option key={index} value={id}>{region}</option>
  ));

  getRegionsAll();

  return(
    <>
      {/*<Link to="/info">profile</Link>{' '}*/}
      {/*<Link to="/auto-tournaments">admin</Link>*/}

      <Modal
        size="sm"
        show={singInShow}
        onHide={() => setSingInShow(false)}
      >
        <Modal.Header closeButton>
          <div className="modal-logo">
            <img src={require("../../Icons/logo-modal.svg").default} alt=""/>
            <h3 className="font-weight-bold">Вход</h3>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className>
            <Form.Control size="lg" type="email" placeholder="Почта" name="username"
                          onChange={(event) => setUserEmail(event.target.value)}
            />
            <Form.Control size="lg" type="password" placeholder="Пароль" name="password"
                          onChange={(event) => setUserPassword(event.target.value)}
            />
          </Form.Group>
          <a href="#" className="modal-link">Забыли пароль?</a>
          <Button variant="danger" className="mb-3" onClick={signIn}>Вход</Button>
          <Button onClick={
            () => {
              setRegistrationShow(true);
              setSingInShow(false);
            }
          }>Зарегистрироваться</Button>
        </Modal.Body>
      </Modal>
      <Modal
        size="sm"
        show={registrationShow}
        onHide={() => setRegistrationShow(false)}
      >
        <Modal.Header closeButton>
          <div className="modal-logo">
            <img src={require("../../Icons/logo-modal.svg").default} alt=""/>
            <h3 className="font-weight-bold">Регистрация</h3>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className>
            <Form.Control size="lg" type="text" placeholder="Никнейм"
                          onChange={(event) => setUserNickname(event.target.value)}
            />
            <Form.Control size="lg" type="email" placeholder="Почта"
                          onChange={(event) => setUserEmail(event.target.value)}
            />
            <Form.Control size="lg" type="password" placeholder="Придумайте пароль"
                          onChange={(event) => setUserPassword(event.target.value)}
            />
            <Form.Control size="lg" type="password" placeholder="Повторите пароль"
                          onChange={(event) => setUserPasswordConfirm(event.target.value)}
            />
            <Form.Control as="select"
                          onChange={(event) => setUserLocationId(event.target.value)}
            >
              {optionsRegions}
          </Form.Control>
        </Form.Group>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" id="custom-checkbox" className="custom-control-input"/>
            <label title="" htmlFor="custom-checkbox" className="custom-control-label">
              Я принимаю <a href="#" className="modal-link text-danger">пользовательское соглашение</a>
            </label>
          </div>
          <Button variant="danger" onClick={registrationSubmit}>Вход</Button>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Login;
