import React, {useState, useCallback} from "react";
import {Form, Button, Col, Row, Container, Table} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-add-results-tournaments.scss';
import useInit from "@app/utils/init";
import {forcedLoadTournamentOptionsForAdminDataAction} from "@app/api/requests/changeTournament";
import store from "@app/store/store";
import {useDispatch} from "react-redux";
import {
  doChangeResultRequestAction,
  forcedLoadTournamentParticipantsDataAction
} from "@app/api/requests/tournamentParticipants";
import AdminTournamentsParticipantsInfo from "../AdminTournamentsParticipantsInfo/AdminTournamentsParticipantsInfo.jsx";
import {Modal} from "react-bootstrap/Modal";

const InfoTournament = (props) => {
  if (!!props.infoTournament) {
    const {tournament_id, title, map, current_players} = props.infoTournament;

    return (
      <tr>
        <th>{tournament_id}</th>
        <th>{title}</th>
        <th>{map}</th>
        <th>{current_players}</th>
      </tr>
    )
  } else {
    return (
      <tr className="mt-3 flex-nowrap">
        <td>Нет турниров</td>
      </tr>
    )
  }
};

const AdminAddResultsTournaments = () => {
  const [activeTournament, setActiveTournament] = useState();
  const [infoActiveTournament, setInfoActiveTournament] = useState();
  const [kill, setKill] = useState();
  const [death, setDeath] = useState();
  const [points, setPoints] = useState();
  const [idInGame, setIdInGame] = useState();
  const [mvp, setMvp] = useState('0');
  let tournamentInfo = [];

  const dispatch = useDispatch();
  // const setTournamentInfo = useCallback(() => dispatch(forcedLoadTournamentOptionsForAdminDataAction({tournament_id: activeTournament})));

  useInit(() => forcedLoadTournamentOptionsForAdminDataAction({tournament_id: activeTournament}), [activeTournament]);

  const getTournamentInfo = () => {
    tournamentInfo = store.getState().requests.responses.get_tournament_options_for_admin.response;

    if (tournamentInfo === null || !!tournamentInfo) {
      tournamentInfo = tournamentInfo.tournamentInfo[0];

      setInfoActiveTournament(tournamentInfo);

      showUsersTournament();
    }
  };

  const showUsersTournament = () => {
    dispatch(forcedLoadTournamentParticipantsDataAction({tournament_id: activeTournament}))
  };

  const changeInfo = useCallback( () => {
    dispatch(doChangeResultRequestAction({
      tournament_results: [
        {
          user_id: idInGame,
          placement: points,
          mvp: mvp,
          kills: kill,
          deaths: death
        }
      ],
      tournament_id: activeTournament
    }));
  }, [kill, death, mvp, points, idInGame, activeTournament]);

  const changeMvpState = useCallback(() => {
    (mvp === '0') ? setMvp('0') : setMvp('1');
  }, [mvp]);

  return (
    <Container>
      <AdminNavbar/>
      <Row>
        <SelectionGames/>
      </Row>
      <Row className="mb-3">
        <Col lg={5} md={6} className="mb-3">
          <Form.Group className="participants-tournament d-flex align-items-center bg-white">
            <Form.Control type="text" placeholder="ID турнира"
                          onChange={(event) => setActiveTournament(event.target.value)}
            />
            <Button className="px-3" onClick={() => getTournamentInfo()}>Поиск</Button>
          </Form.Group>
        </Col>
        {/*<Col sm={12} className="mb-3 tournaments-list__btn-group">*/}
          {/*<Button variant="warning" className="mr-2 text-white">Отправить</Button>*/}
          {/*<Button variant="warning" className="mr-2 text-white">Результаты</Button>*/}
          {/*<Button variant="danger">Очистить</Button>*/}
        {/*</Col>*/}
      </Row>
      <Row>
        <Col sm={12} lg={8}>
          <div className="participants-tournament bg-white text-dark d-flex mb-4 flex-column flex-md-row">
            <Table className="bg-white mt-3 overflow-hidden">
              <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Режим</th>
                <th>Участников</th>
              </tr>
              </thead>
              <tbody className="tournaments-info-wrapper">
                <InfoTournament infoTournament={infoActiveTournament}/>
              </tbody>
            </Table>
          </div>
          <div
            className="participants-tournament tournaments-list__result d-flex align-items-center bg-white mb-4 flex-column flex-md-row">
            <Form.Control className="mb-1 mb-md-0" type="number" placeholder="Ид игрока"
                          onChange={(event) => setIdInGame(event.target.value)}
            />
            <Form.Control className="mb-1 mb-md-0" type="number" placeholder="Очки"
                          onChange={(event) => setPoints(event.target.value)}
            />
            <Form.Control className="mb-1 mb-md-0" type="text" placeholder="Убийства"
                          onChange={(event) => setKill(event.target.value)}
            />
            <Form.Control className="mb-1 mb-md-0" type="text" placeholder="Смерти"
                          onChange={(event) => setDeath(event.target.value)}
            />
            <div className="custom-control custom-checkbox">
              <input type="checkbox" id="custom-checkbox"
                     onChange={() => changeMvpState()}
                     className="custom-control-input"/>
              <label htmlFor="custom-checkbox" className="custom-control-label text-dark font-weight-bold">
                MVP
              </label>
            </div>
            <Button variant="warning" className="w-100 w-md-auto text-white" onClick={changeInfo}>Добавить</Button>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <Table className="participants-tournament px-2 align-items-center bg-white overflow-hidden">
            <thead>
            <tr>
              <th>Ид</th>
              <th>Никнейм</th>
            </tr>
            </thead>
            <tbody className="tournaments-info-wrapper">
              <AdminTournamentsParticipantsInfo />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddResultsTournaments;