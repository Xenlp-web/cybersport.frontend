import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Container, Row, Form, Button} from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import SelectionGames from "../SelectionGames/SelectionGames.jsx";
import './admin-add-tournaments.scss';
import {doCreateTournamentRequestAction} from "@app/api/requests/tournaments";

const AdminAddTournaments = () => {
  const game_id = 1;
  const region_id = 0;

  const [nameTournament, setNameTournament] = useState('');
  const [passwordLobby, setPasswordLobby] = useState('');
  const [rewardForKilling, setRewardForKilling] = useState('');
  const [ticketsForEntance, setTicketsForEntance] = useState('');
  const [numberOfWinners, setNumberOfWinners] = useState('');
  const [rewardForPlace, setRewardForPlace] = useState('');
  const [rewardForMVP, setRewardForMVP] = useState('');
  const [maxNumberOfPlayers, setMaxNumberOfPlayers] = useState('100');
  const [selectedMap, setSelectedMap] = useState('Эрангель');
  const [selectedMod, setSelectedMod] = useState('Соло');
  const [selectedPov, setSelectedPov] = useState('FPP');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [broadcast, setBroadcast] = useState('');
  const [imagesName, setImagesName] = useState('');

  const dispatch = useDispatch();

  const tournamentAddSubmit = useCallback(() => {
    dispatch(doCreateTournamentRequestAction({
      new_tournament: {
        title: nameTournament,
        game_id: game_id,
        tickets: ticketsForEntance,
        img: imagesName,
        start_time: date + ' ' + time + ':00',
        region: region_id
      },
      options: {
        map: selectedMap,
        mode: selectedMod,
        pov: selectedPov,
        max_players: maxNumberOfPlayers,
        winners: numberOfWinners,
        placement_award: rewardForPlace,
        kill_award: rewardForKilling,
        mvp_award: rewardForMVP,
        lobby_pass: passwordLobby
      }
    }));
  }, [
    nameTournament,
    game_id,
    ticketsForEntance,
    imagesName,
    time,
    region_id,
    selectedMap,
    selectedMod,
    selectedPov,
    maxNumberOfPlayers,
    numberOfWinners,
    rewardForPlace,
    rewardForKilling,
    rewardForMVP,
    passwordLobby
  ]);

  return (
    <Container>
      <AdminNavbar/>
      <Row>
        <SelectionGames/>
      </Row>
      <div className="add_tournaments__wrapper bg-white">
        <Row className="add_tournaments__row">
          <Form.Control type="text" placeholder="Название"
                        onChange={(event) => setNameTournament(event.target.value)}/>
          <Form.Control type="text" placeholder="Пароль от лобби"
                        onChange={(event) => setPasswordLobby(event.target.value)}/>
          <Form.Control type="number" placeholder="Награда за киллы"
                        onChange={(event) => setRewardForKilling(event.target.value)}/>
          <Form.Control type="number" placeholder="Билетов за вход"
                        onChange={(event) => setTicketsForEntance(event.target.value)}/>
          <Form.Control type="number" placeholder="Кол-во победителей"
                        onChange={(event) => setNumberOfWinners(event.target.value)}/>
          <Form.Control type="number" placeholder="Награда за место"
                        onChange={(event) => setRewardForPlace(event.target.value)}/>
          <Form.Control type="number" placeholder="Награда за MVP"
                        onChange={(event) => setRewardForMVP(event.target.value)}/>
          <Form.Control type="number" placeholder="Игроков в лобби"
                        onChange={(event) => setMaxNumberOfPlayers(event.target.value)} value={maxNumberOfPlayers} />
          <Form.Control as="select" onChange={(event) => setSelectedMap(event.target.value)}>
            <option value="Эрангель">Эрангель</option>
            <option value="Санук">Санук</option>
            <option value="Мирамар">Мирамар</option>
            <option value="Викенди">Викенди</option>
            <option value="Ливик">Ливик</option>
          </Form.Control>
          <Form.Control as="select" onChange={(event) => setSelectedMod(event.target.value)}>
            <option value="Соло">Соло</option>
            <option value="Дуо">Дуо</option>
            <option value="Сквады">Сквады</option>
          </Form.Control>
          <Form.Control as="select" onChange={(event) => setSelectedPov(event.target.value)}>
            <option value="FPP">FPP</option>
            <option value="SPP">SPP</option>
            <option value="TPP" selected="">TPP</option>
          </Form.Control>
          <Form.Control type="date" onChange={(event) => setDate(event.target.value)}/>
          <Form.Control type="time" onChange={(event) => setTime(event.target.value)}/>
          <Form.Control type="text" placeholder="Трансляция"
                        onChange={(event) => setBroadcast(event.target.value)}/>
          <Form.File id="selectingAnImageForTheTournament" custom>
            <Form.File.Input
              accept=".png, .jpg, .jpeg"
              onChange={(event) => {
              setImagesName(event.target.files[0].name);
            }}/>
            <Form.File.Label data-browse="Выбрать">
              Картинка
            </Form.File.Label>
          </Form.File>
        </Row>
        <div className="text-center mt-4">
          <Button className="btn-warning text-white mr-3 btn--add" onClick={tournamentAddSubmit}>Добавить</Button>
          <Button className="btn--clear">Очистить</Button>
        </div>
      </div>
    </Container>
  );
}

export default AdminAddTournaments;
