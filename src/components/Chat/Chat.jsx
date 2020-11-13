import React, {useCallback, useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";

import './Chat.scss';
import {doSendMessageToGlobalChatRequestAction, loadMessageToGlobalChatDataAction} from '@app/api/requests/globalChat';
import {useDispatch, useSelector} from "react-redux";
import {allMessageGlobalChatSelector} from "@app/selectors/chatMessageSelector";
import {checkAuth} from "@app/selectors/checkAuth";
import store from "@app/store/store";
import useInit from "@app/utils/init";

const Chat = () => {
  const [messageText, setMessageText] = useState('');

  const dispatch = useDispatch();
  const AUTH = checkAuth(store);
  const messagesAllResponse = useSelector(allMessageGlobalChatSelector);

  const sendMessage = useCallback( () => {
    dispatch(doSendMessageToGlobalChatRequestAction({message: messageText}));
  }, [messageText]);

  useInit(loadMessageToGlobalChatDataAction, [sendMessage]);

  const messagesArrays = Object.entries(messagesAllResponse);
  let messageData = [];

  messagesArrays.forEach(([key, value]) => {
    messageData = [...messageData, value];

    return messageData;
  });

  const msg = messageData.reverse().map(({created_at, user_name, message}, index) => {
    const dateStamp = new Date(created_at);
    const timeStamp = dateStamp.getUTCHours() + ':' + dateStamp.getUTCMinutes();

    return (
      <div className="message" key={index}>
        <div className="message-text-wrapper">
          <div className="message-text text-dark">{message}</div>
          <div className="message-timeStamp">{timeStamp}</div>
        </div>
        <h3 className="font-weight-bold message-sender">{user_name}</h3>
      </div>
    )
  });

  return (
    <div className="chat-wrapper position-relative">
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <div className="chat-container bg-white">
              <h2 className="text-dark">Чат</h2>
              <div className="message-wrapper">
                {msg}
              </div>
              {AUTH ?
                <div className="message-form">
                  <Form.Group controlId="" className="mb-3 text-dark">
                    <Form.Control as="textarea" rows="3" onChange={(event) => setMessageText(event.target.value)}/>
                  </Form.Group>
                  <Button variant="danger" onClick={sendMessage}>Отправить</Button>
                </div>
                :
                <div className="massage-footer">
                  <div className="message-descr text-dark">Для того чтобы общаться в чате <Link to='#' className="text-dark link msg--link">зарегистрируйтесь</Link></div>
                </div>
              }
            </div>
          </Col>
          <Col sm={12} lg={6} className="position-relative">
            <div className="row d-lg-flex d-none">
              <img className="chat-images" src={require("../../images/backgrounds/bg-chat.png").default} alt=""/>
            </div>
            <div className="chat-btn-group">
              <Button variant="light" className="mr-2">Общайтесь в чате</Button>
              <Button variant="light">Делитесь эмоциями</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Chat;
