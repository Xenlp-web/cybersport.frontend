import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './jumbo.scss';

const ONLINE = 3455;

const Jumbo = () => (
    <div className='jumbotron__wrapper'>
        <Jumbotron fluid>
            <Container>
                <div className='text-white jumbotron__text-content d-flex align-items-start flex-column'>
                    <div className="jumbotron__online bg-white d-none d-md-flex align-items-center">
                        <span className='joystick'> </span>
                        <span className='text-dark'>Сейчас играют<b className='px-2'>{ONLINE}</b>игроков</span>
                    </div>
                    <h1 className='jumbotron__title'>
                        Получай кэш за победы в турнирах <br/>по <span className='text-danger'>PUBG mobile</span>
                    </h1>
                    <p className='jumbotron__descr'>
                        Бонусы / Разные режимы / Без комиссий
                    </p>
                    <div className="d-flex align-items-center">
                        <Button className='mr-2 mr-sm-4' variant="danger" size="lg">Войти прямо сейчас</Button>
                        <span className='jumbotron__bonus'>+ получить бонус</span>
                    </div>
                </div>
            </Container>
        </Jumbotron>
    </div>
);

export default Jumbo;