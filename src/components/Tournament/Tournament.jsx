import React, {useState} from 'react';
import SelectionGames from '../SelectionGames/SelectionGames.jsx';
import TournamentBanner from '../TournamentBanner/TournamentBanner.jsx';
import TournamentsCards from '../TournamentsCards/TournamentsCards.jsx';
import Chat from "../Chat/Chat.jsx";
import './tournament.scss';
import {Container, Row} from "react-bootstrap";
import useInit from "@app/utils/init";
import {forcedLoadTournamentsForGamesDataAction} from "@app/api/requests/tournaments";
import {useSelector} from "react-redux";
import {getTournamentsForGameSelector} from "@app/selectors/tournamentsForGameSelector";

let tournamentCardInfoToday = [];
let tournamentCardInfoTomorrow = [];
let tournamentCardInfoPast = [];

const Tournament = () => {
  const [gameIdSelected, setGameIdSelected] = useState(1);

  useInit(() => forcedLoadTournamentsForGamesDataAction({
      game_id: gameIdSelected
    }), []
  );

  const tournametsForGameResponse = useSelector(getTournamentsForGameSelector);

  if (!!tournametsForGameResponse) {
    tournamentCardInfoToday = tournametsForGameResponse.tournamentsToday;
  }
  if (!!tournametsForGameResponse) {
    tournamentCardInfoTomorrow = tournametsForGameResponse.tournamentsTomorrow;
  }
  if (!!tournametsForGameResponse) {
    tournamentCardInfoPast = tournametsForGameResponse.tournamentsEnded;
  }

  const checkTournamentsToday = () => {
    let cardsToday;

    if(tournamentCardInfoToday.length > 0) {
      cardsToday = <Row className='justify-content-center justify-content-md-start'>
                    <TournamentsCards type="today" tournamentCardInfo={tournamentCardInfoToday}/>
                  </Row>
    } else {
      cardsToday = <div className='no_tournaments'>На сегодня нет турниров</div>
    }

    return cardsToday;
  };

  const checkTournamentsTomorrow = () => {
    let cardsTomorrow;

    if(tournamentCardInfoTomorrow.length > 0) {
      cardsTomorrow = <Row className='justify-content-center justify-content-md-start'>
        <TournamentsCards type="tomorrow" tournamentCardInfo={tournamentCardInfoTomorrow}/>
      </Row>
    } else {
      cardsTomorrow = <div className='no_tournaments'>На завтра нет турниров</div>
    }

    return cardsTomorrow;
  };

  const checkTournamentsPast = () => {
    let cardsPast;
    if(tournamentCardInfoPast.length > 0) {
      cardsPast = <Row className='justify-content-center justify-content-md-start'>
        <TournamentsCards type="past" tournamentCardInfo={tournamentCardInfoPast} />
      </Row>
    } else {
      cardsPast = <div className='no_tournaments'>На завтра нет турниров</div>
    }
    return cardsPast;
  };

  return (
    <>
      <SelectionGames/>
      <TournamentBanner/>
      <Chat/>
      <Container className='mb-md-5 container--indent'>
        <h2>Сегодня</h2>
        {checkTournamentsToday()}
      </Container>
      <Container className='mb-md-5 container--indent'>
        <h2>Завтра</h2>
        {checkTournamentsTomorrow()}
      </Container>
      <Container className='mb-md-5 container--indent'>
        <h2>Прошедшие</h2>
        {checkTournamentsPast()}
      </Container>
    </>
  )
};

export default Tournament;
