import React, { useState, useCallback } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {Modal, Button, Form} from 'react-bootstrap';
import {userLoginFetch} from '../../redux/actions';

import {
  // doSignInRequestAction,
  // signInFulfilledAction,
  // signInErrorSelector,
  // signInIsLoadingSelector,
  // signInRequestStatusSelector,
  signInResponseSelector
} from '@app/api/requests/sign-in';

import './login.scss';

const Login = (props) => {
  const setSingInShow = props.setSingInShow;
  const singInShow = props.singInShow;
  const setRegistrationShow = props.setRegistrationShow;
  const registrationShow = props.registrationShow;

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const signIn = useCallback( () => {
    dispatch(signInResponseSelector({email: userLogin, password: userPassword}));
  }, [userLogin, userPassword]);

  // const errorSingIn = useSelector(signInErrorSelector);
  // const signInIsLoading = useSelector(signInIsLoadingSelector);
  // const signInRequestStatus = useSelector(signInRequestStatusSelector);
  // const signInResponse = useSelector(signInResponseSelector);
  //
  // console.log('error =>'+ errorSingIn);
  // console.log('signInIsLoading =>' + signInIsLoading);
  // console.log('signInRequestStatus =>' + signInRequestStatus);
  // console.log('signInResponse =>' + signInResponse);

  return(
      <>
          <Link to="/info">profile</Link>{' '}
          <Link to="/auto-tournaments">admin</Link>

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
                                onChange={(event) => setUserLogin(event.target.value)}
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
              <Form.Control size="lg" type="email" placeholder="Почта" />
              <Form.Control size="lg" type="password" placeholder="Придумайте пароль" />
              <Form.Control size="lg" type="password" placeholder="Повторите пароль" />
            </Form.Group>

            <div className="custom-control custom-checkbox">
              <input type="checkbox" id="custom-checkbox" className="custom-control-input"/>
              <label title="" htmlFor="custom-checkbox" className="custom-control-label">
                Я принимаю <a href="#" className="modal-link text-danger">пользовательское соглашение</a>
              </label>
            </div>
            <Button variant="danger">Вход</Button>
          </Modal.Body>
        </Modal>
      </>
  )
};

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

// export default Login;
export default connect(null, mapDispatchToProps)(Login);