import { Button, Form } from "react-bootstrap";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { doChangeTournamentRequestAction, doDeleteTournamentsForGamesRequestAction } from "@app/api/requests/changeTournament";

const AdminTournamentChangeInfo = (props) => {
  const game_id = 1;

  const [lobbyId, setLobbyId] = useState('');
  const [lobbyPassword, setLobbyPassword] = useState('');
  const [broadcast, setBroadcast] = useState('');
  // const [imagesName, setImagesName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const deleteTournament = useCallback( () => {
    dispatch(doDeleteTournamentsForGamesRequestAction({
      tournament_id: props.activeTournament,
      game_id: game_id
    }));
  }, [props.activeTournament, game_id]);

  const changeLobbyId = useCallback(() => {
    dispatch(doChangeTournamentRequestAction({
      tournament_id: props.activeTournament,
      game_id: game_id,
      tournament_common_info: {
        lobby_id: lobbyId
      },
      tournament_info_by_game: {
        tournament_id: props.activeTournament
      }
    }));
  }, [props.activeTournament, game_id, lobbyPassword]);

  const changeLobbyPassword = useCallback(() => {
    dispatch(doChangeTournamentRequestAction({
      tournament_id: props.activeTournament,
      game_id: game_id,
      tournament_common_info: {
        lobby_pass: lobbyPassword
      },
      tournament_info_by_game: {
        tournament_id: props.activeTournament
      }
    }));
  }, [props.activeTournament, game_id, lobbyId]);

  const changeBroadcast = useCallback(() => {
    dispatch(doChangeTournamentRequestAction({
      tournament_id: props.activeTournament,
      game_id: game_id,
      tournament_common_info: {
        stream: broadcast
      },
      tournament_info_by_game: {
        tournament_id: props.activeTournament
      }
    }));
  }, [props.activeTournament, game_id, broadcast]);

  const changeMaxPlayers = useCallback(() => {
    dispatch(doChangeTournamentRequestAction({
      tournament_id: props.activeTournament,
      game_id: game_id,
      tournament_common_info: {
        max_players: maxPlayers
      },
      tournament_info_by_game: {
        tournament_id: props.activeTournament
      }
    }));
  }, [props.activeTournament, game_id, maxPlayers]);

  const changeTitle = useCallback(() => {
    dispatch(doChangeTournamentRequestAction({
      tournament_id: props.activeTournament,
      game_id: game_id,
      tournament_common_info: {
        title: title
      },
      tournament_info_by_game: {
        tournament_id: props.activeTournament
      }
    }));
  }, [props.activeTournament, game_id, title]);

  // const loadImage = (fileName) => {
  //   postDocumentsRequest(fileName, game_id, props.activeTournament );
  // };

  return (
    <div className="users-wrapper bg-white">
      <Form.Group className="users-row">
        <Form.Control type="text" placeholder="ID лобби"
                      onChange={(event) => setLobbyId(event.target.value)}/>
        <Button variant="warning" className="text-white px-3" onClick={changeLobbyId}>Отправить</Button>
      </Form.Group>
      <Form.Group className="users-row">
        <Form.Control type="text" placeholder="Пароль"
                      onChange={(event) => setLobbyPassword(event.target.value)}/>
        <Button variant="warning" className="text-white px-3" onClick={changeLobbyPassword}>Отправить</Button>
      </Form.Group>
      <Form.Group className="users-row">
        <Form.Control type="text" placeholder="Трансляция"
                      onChange={(event) => setBroadcast(event.target.value)}/>
        <Button variant="warning" className="text-white px-3" onClick={changeBroadcast}>Отправить</Button>
      </Form.Group>
      {/*<Form.Group className="users-row">*/}
        {/*<Form.File id="selectingAnImageForTheTournament" custom>*/}
          {/*<Form.File.Input*/}
            {/*accept=".png, .jpg, .jpeg"*/}
            {/*onChange={(event) => {*/}
              {/*setImagesName(event.target.files[0].name);*/}
            {/*}}/>*/}
          {/*<Form.File.Label data-browse="Выбрать" className="mr-2">*/}
            {/*Картинка*/}
          {/*</Form.File.Label>*/}
        {/*</Form.File>*/}
        {/*<Form.Control type="text" placeholder="Картинка"*/}
                      {/*onChange={(event) => setImagesName(event.target.value)}/>*/}
        {/*<Button variant="warning" className="text-white px-3" onClick={() => loadImage(imagesName)}>Отправить</Button>*/}
      {/*</Form.Group>*/}
      <Form.Group className="users-row">
        <Form.Control type="text" placeholder="Максимум игроков"
                      onChange={(event) => setMaxPlayers(event.target.value)}/>
        <Button variant="warning" className="text-white px-3" onClick={changeMaxPlayers}>Отправить</Button>
      </Form.Group>
      <Form.Group className="users-row">
        <Form.Control type="text" placeholder="Название"
                      onChange={(event) => setTitle(event.target.value)}/>
        <Button variant="warning" className="text-white px-3" onClick={changeTitle}>Отправить</Button>
      </Form.Group>
      <Form.Group className="users-row">
        <Button variant="warning" className="text-white px-3"
                onClick={deleteTournament}
        >Удалить турнир</Button>
      </Form.Group>
    </div>
  )
};

export default AdminTournamentChangeInfo;