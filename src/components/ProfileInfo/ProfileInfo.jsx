import React from 'react';
import {Row, Container, Col, Button} from 'react-bootstrap';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar.jsx";
import HistoryTournamentsCards from '../HistoryTournaments/HistoryTournaments.jsx';
import './profile-info.scss';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {userDataSelector} from "@app/selectors/userDataSelector";

const ProfileInfo = () => {
  const userData = useSelector(userDataSelector);

  const logout = () => {
    localStorage.removeItem('Authorization');
    location.assign("/").reload();
  }

  const {
    coins,
    coins_bonus,
    coins_from_referals,
    nickname,
    referal_code,
    tickets,
    is_admin
  } = userData;

  const rp = 0;
  const rank = 0;

  return (
    <Container>
        <Row className="mt-6">
          <Col lg={8} xl={6} className="mb-md-4 mb-xl-0">
            <ProfileNavbar/>
            <div className="profile-info">
              <Row className="align-items-center mb-4 d-none d-md-flex">
                <Col xs={6}>
                  <span className="profile-info__nick">{nickname}</span>
                </Col>
                <Col xs={6}>
                  <Button className="profile-info__notifications"><span className="notifications__icon"> </span>Настроить оповещания</Button>
                </Col>
              </Row>
              <Row className="order-sm-2">
                <div className="profile-info__wrap">
                  <span className="profile-info__title">Рейтинг</span>
                  <span className="profile-info__descr">{rp}Rp</span>
                </div>
                <div className="profile-info__wrap">
                  <span className="profile-info__title">Ранг</span>
                  <span className="profile-info__descr">{rank}Rp</span>
                </div>
              </Row>
              <Row className="order-sm-1">
                <div className="profile-info__wrap">
                  <span className="profile-info__title">Билеты</span>
                  <span className="profile-info__descr--small"><span className="tickets"></span>{tickets}</span>
                </div>
                <div className="profile-info__wrap">
                  <span className="profile-info__title">Баланс</span>
                  <span className="profile-info__descr--small">{coins} ₽</span>
                </div>
                <div className="profile-info__wrap">
                  <span className="profile-info__title">Бонусов</span>
                  <span className="profile-info__descr--small">{coins_bonus} ₽</span>
                </div>
              </Row>
              <div className="profile-info-ref d-flex flex-column order-sm-3">
                <h3 className="h6 mb-2 w-100">Реферальная система</h3>
                <div className="row mb-2 mb-md-4">
                  <div className="profile-info-ref__col col-sm-12 col-md-6">
                    <div className="profile-info-ref__title">Ваша реферальная ссылка:</div>
                    <div className="profile-info-ref__link">
                      <span className="profile-info-ref__link-text">{referal_code}</span>
                      <span className="profile-info-ref__link-icon"> </span>
                    </div>
                  </div>
                  <div className="profile-info-ref__col  col-sm-12 col-md-6 p-2 px-md-4">
                    <div className="profile-info-ref__title">
                      <span>Количество рефералов: </span>
                      <span>{coins_from_referals}</span>
                    </div>
                    <div className="profile-info-ref__descr profile-info-ref__descr--desktop d-none d-md-flex">
                      Пригласи друга по своей реферальной ссылке и получи 1 билет
                    </div>
                    <div className="profile-info-ref__descr profile-info-ref__descr--mobile text-danger d-flex d-md-none">
                      <span>Бонус</span>
                      <b>5% от выигрыша реферала</b>
                    </div>
                  </div>
                </div>
                <div className="profile-info-ref__col">
                  <div className="profile-info-ref__title">
                    Заработано с рефералов
                  </div>
                  <div className="profile-info-ref__money">{coins_from_referals} ₽</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} xl={6} className="d-none d-md-block">
            <p className="mb-4 font-weight-bolder">История сыгранных турниров</p>
            <div className='h-tournaments-wrapper row flex-column'>
              <HistoryTournamentsCards />
            </div>
          </Col>
        </Row>
      {is_admin
        ? <div className='text-center mt-4'>
          <Link to="/auto-tournaments" className="mb-3">войти в панель администратора</Link>
          <br/>
          <Link to="#" onClick={logout}>Выйти</Link>
      </div>
        : <div className='text-center mt-4'><Link to="#" onClick={logout}>Выйти</Link></div>
      }
      </Container>
  )
};

export default ProfileInfo;
