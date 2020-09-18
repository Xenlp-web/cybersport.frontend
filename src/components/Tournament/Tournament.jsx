import React from 'react';
import SelectionGames from '../SelectionGames/SelectionGames.jsx';
import TournamentBanner from '../TournamentBanner/TournamentBanner.jsx';
import TournamentsCards from '../TournamentsCards/TournamentsCards.jsx';
import './tournament.scss';
import {Container, Row} from "react-bootstrap";

const tournamentCardInfoToday = [
    {
        images: 'img-1.jpg',
        currentPlayers: 5,
        maxPlayers: 15,
        title: 'Arcade Cup #10',
        mode: 'Турнир за киллы',
        type: 'SOLO TPP',
        time: '12:30',
        priceForKill: 30,
        costTickets: 1,
        important: false
    },
    {
        images: 'img-1.jpg',
        currentPlayers: 5,
        maxPlayers: 15,
        title: 'Arcade Cup #10',
        mode: 'Турнир за киллы',
        type: 'SOLO TPP',
        time: '12:30',
        priceForKill: 30,
        costTickets: 1,
        important: false
    },
    {
        images: 'img-1.jpg',
        currentPlayers: 5,
        maxPlayers: 15,
        title: 'Arcade Cup #10',
        mode: 'Турнир за киллы',
        type: 'SOLO TPP',
        time: '12:30',
        priceForKill: 30,
        costTickets: 1,
        important: false
    },
];

const Tournament = () => (
    <>
      <SelectionGames/>
      <TournamentBanner/>
      <Container className='mb-5'>
            <h2>Сегодня</h2>
          <Row>
            <TournamentsCards type="today" tournamentCardInfoToday={tournamentCardInfoToday}/>
          </Row>
      </Container>
        <Container className='mb-5'>
            <h2>Завтра</h2>
            <Row>
                <TournamentsCards type="tomorrow" tournamentCardInfoToday={tournamentCardInfoToday}/>
            </Row>
        </Container>
        <Container className='mb-5'>
            <h2>Прошедшие</h2>
            <Row>
                <TournamentsCards type="past" tournamentCardInfoToday={tournamentCardInfoToday}/>
            </Row>
        </Container>
    </>
);

export default Tournament;