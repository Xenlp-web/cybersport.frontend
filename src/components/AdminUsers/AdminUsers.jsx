import React, {useCallback, useState} from "react";
import {Form, Button, Col, Row, Container, Nav} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-users.scss';
import {useDispatch} from "react-redux";
import {doChangeUserInfoRequestAction} from "@app/api/requests/changeUserInfo";
import useInit from "@app/utils/init";
import {forcedLoadUserInfoDataAction} from "@app/api/requests/changeUserByAdmin";
import store from "@app/store/store";

const InfoUser = (props) => {
  if (!!props.infoUser) {
    const abjArr = Object.entries(props.infoUser);

    const userInfo = abjArr.map((item) => (
      <div className="tournament-list__item"><span>{item[0]}</span><span>{item[1]}</span></div>
    ));

    return (
      userInfo
    )
  } else {
    return (
      <div className="mt-3 flex-nowrap">
        <p>Введите ид пользователя</p>
      </div>
    )
  }
};

const AdminUsers = () => {
  const [activeUser, setActiveUser] = useState();
  const [moneyForPlayer, setMoneyForPlayer] = useState();
  const [bonusForPlayer, setBonusForPlayer] = useState();
  const [ticketsForPlayer, setTicketsForPlayer] = useState();
  const [refClassForPlayer, setRefClassForPlayer] = useState();
  const [refCodeForPlayer, setRefCodeForPlayer] = useState();
  const [ratingForPlayer, setRatingForPlayer] = useState();
  const [banForPlayer, setBanForPlayer] = useState();
  const [infoActiveUser, setInfoActiveUser] = useState();
  let userInfo = [];

  const dispatch = useDispatch();

  useInit(() => forcedLoadUserInfoDataAction({query: activeUser}), [activeUser]);

  const getUserInfo = () => {
    userInfo = store.getState().requests.responses.get_user_info_by_admin.response;

    if (userInfo === null || !!userInfo) {
      userInfo = userInfo.user;

      setInfoActiveUser(userInfo);
    }
  };

  const changeUserMoney = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        coins: moneyForPlayer
      }
    }));
  }, [moneyForPlayer]);

  const changeUserBonus = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        coins_bonus: bonusForPlayer
      }
    }));
  }, [bonusForPlayer]);

  const changeUserTickets = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        tickets: ticketsForPlayer
      }
    }));
  }, [ticketsForPlayer]);

  const changeUserRefClass = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        referal_class: refClassForPlayer
      }
    }));
  }, [refClassForPlayer]);

  const changeUserRefCode = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        referal_code: refCodeForPlayer
      }
    }));
  }, [refCodeForPlayer]);

  const changeUserRating = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        rating: ratingForPlayer
      }
    }));
  }, [ratingForPlayer]);

  const changeUserBan = useCallback( () => {
    dispatch(doChangeUserInfoRequestAction({
      user_id: activeUser,
      user_info: {
        banned: banForPlayer
      }
    }));
  }, [banForPlayer]);

  return (
    <Container>
      <AdminNavbar/>
      <Row>
        <SelectionGames/>
      </Row>
      <Row>
        <Col lg={6} md={12} className="mb-3">
          <Form.Group className="participants-tournament d-flex align-items-center bg-white">
            <Form.Control type="text" placeholder="ID игрока"
                          onChange={(event) => setActiveUser(event.target.value)}
            />
            <Button variant="warning" className="text-white px-3"
                    onClick={() => getUserInfo()}
            >Загрузить</Button>
            {/*<Button className="px-3">Очистить</Button>*/}
          </Form.Group>
        </Col>
      </Row>
      <div className="row text-dark">
        <Col lg={7} md={12} className="mb-4">
          <div className="users-wrapper bg-white">
            <InfoUser infoUser={infoActiveUser} />
          </div>
        </Col>
        <Col lg={5} md={12}>
          <div className="users-wrapper bg-white">
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="На баланс"
                            onChange={(event) => setMoneyForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserMoney}
              >Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Бонусы"
                            onChange={(event) => setBonusForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserBonus}
              >Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Билеты"
                            onChange={(event) => setTicketsForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserTickets}
              >Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Реферальный класс"
                            onChange={(event) => setRefClassForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserRefClass}
              >Отправить</Button>
            </Form.Group>
            {/*<Nav as="ul" className="user-list">*/}
              {/*<Nav.Item>Реферальные классы:</Nav.Item>*/}
              {/*<Nav.Item>0 - стандартный</Nav.Item>*/}
              {/*<Nav.Item>1 - 5% от рефералов, 2 ранг рефералам</Nav.Item>*/}
              {/*<Nav.Item>2 - 10% от рефералов, 2 ранг рефералам</Nav.Item>*/}
              {/*<Nav.Item>3 - 0% от рефералов, 2 ранг рефералам</Nav.Item>*/}
            {/*</Nav>*/}
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Реферальный код"
                            onChange={(event) => setRefCodeForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserRefCode}
              >Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Рейтинг"
                            onChange={(event) => setRatingForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserRating}
              >Отправить</Button>
            </Form.Group>
            <Form.Group className="users-row">
              <Form.Control type="text" placeholder="Бан"
                            onChange={(event) => setBanForPlayer(event.target.value)}
              />
              <Button variant="warning" className="text-white px-3"
                      onClick={changeUserBan}
              >Отправить</Button>
            </Form.Group>
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default AdminUsers;