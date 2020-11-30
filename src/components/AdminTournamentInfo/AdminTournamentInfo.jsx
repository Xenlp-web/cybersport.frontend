import React from "react";
import { useSelector } from "react-redux";
import {getTournamentOptionsForAdminResponseSelector } from "@app/api/requests/changeTournament";

const AdminTournamentInfo = () => {
  const tournamentOptionsForAdminResponse = useSelector(getTournamentOptionsForAdminResponseSelector);

  if (!!tournamentOptionsForAdminResponse) {
    const {
      ended,
      game_id,
      tournament_id,
      img,
      important,
      region,
      start_time,
      stream,
      tickets,
      title,
      map,
      mode,
      pov,
      current_players,
      max_players,
      winners,
      placement_award,
      kill_award,
      mvp_award,
      lobby_id,
      lobby_pass
    } = tournamentOptionsForAdminResponse.tournamentInfo[0];

    return (
      <>
        <div className="bg-white text-dark tournaments-list__wrapper">
          <div className="tournament-list__header font-weight-bold mb-3">
          <span className="tournament-list__header-title">
            Название: <span className="text-danger">{title}</span>
          </span>
            <span className="tournament-list__header-title float-right">
            ID: <span className="text-danger">{tournament_id}</span>
          </span>
          </div>
          <div className="tournament-list__item">
            <span>Окончен</span>
            <span>{(ended === 0) ? 'не окончен' : 'окончен'}</span>
          </div>
          <div className="tournament-list__item">
            <span>Ид игры</span>
            <span>{game_id}</span>
          </div>
          <div className="tournament-list__item">
            <span>Имя изображения</span>
            <span>{img}</span>
          </div>
          <div className="tournament-list__item">
            <span>Важность</span>
            <span>{(important === 0) ? 'обычный' : 'важный'}</span>
          </div>
          <div className="tournament-list__item">
            <span>Регион</span>
            <span>{(region === 0) ? 'us' : 'eu'}</span>
          </div>
          <div className="tournament-list__item">
            <span>Дата и время</span>
            <span>{start_time}</span>
          </div>
          <div className="tournament-list__item">
            <span>Ссылка на стрим</span>
            <span>{stream}</span>
          </div>
          <div className="tournament-list__item">
            <span>Цена за вход</span>
            <span>{tickets}</span>
          </div>
          <div className="tournament-list__item">
            <span>Карта</span>
            <span>{map}</span>
          </div>
          <div className="tournament-list__item">
            <span>Мод</span>
            <span>{mode}</span>
          </div>
          <div className="tournament-list__item">
            <span>Режим</span>
            <span>{pov}</span>
          </div>
          <div className="tournament-list__item">
            <span>Участников</span>
            <span>{current_players}</span>
          </div>
          <div className="tournament-list__item">
            <span>Максимум участников</span>
            <span>{max_players}</span>
          </div>
          <div className="tournament-list__item">
            <span>Участников</span>
            <span>{current_players}</span>
          </div>
          <div className="tournament-list__item">
            <span>Победителей</span>
            <span>{winners}</span>
          </div>
          <div className="tournament-list__item">
            <span>Награда за участие</span>
            <span>{placement_award}</span>
          </div>
          <div className="tournament-list__item">
            <span>Награда за убийство</span>
            <span>{kill_award}</span>
          </div>
          <div className="tournament-list__item">
            <span>Награда за MVP</span>
            <span>{mvp_award}</span>
          </div>
          <div className="tournament-list__item">
            <span>Ид лобби</span>
            <span>{lobby_id}</span>
          </div>
          <div className="tournament-list__item">
            <span>Пароль от лобби</span>
            <span>{lobby_pass}</span>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div>
        Выберите турнир из списка
      </div>
    )
  }
};

export default AdminTournamentInfo;