import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

import './Chat.scss';

const MSG = [
  {
    timeStamp: '16-03',
    nick: 'killer',
    msg: 'test message'
  },
  {
    timeStamp: '16-03',
    nick: 'killer',
    msg: 'test message 2'
  },
  {
    timeStamp: '16-03',
    nick: 'killer',
    msg: 'test message 3'
  }
];

const Chat = () => {
  const msg = MSG.map(({timeStamp, nick, msg}) => {
    return (
      <div className="message">
        <div className="message-text-wrapper">
          <div className="message-text">{msg}</div>
          <div className="message-timeStamp">{timeStamp}</div>
        </div>
        <h3 className="font-weight-bold message-sender">{nick}</h3>
      </div>
    )
  });

  return (
    <div className="chat-wrapper position-relative">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="chat-container bg-white">
              <h2 className="text-dark">Чат</h2>
              <div className="message-wrapper">
                {msg}
              </div>
              <div className="massage-footer">
                <div className="message-descr text-dark">Для того чтобы общаться в чате <Link to='#' className="text-dark link msg--link">зарегистрируйтесь</Link></div>
              </div>
            </div>
          </Col>
          <Col sm={6} className="position-relative">
            <div className="row">
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