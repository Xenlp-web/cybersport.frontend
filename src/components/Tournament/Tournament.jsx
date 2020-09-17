import React from 'react';
import SelectionGames from '../SelectionGames/SelectionGames.jsx';
import TournamentBanner from '../TournamentBanner/TournamentBanner.jsx';
import './tournament.scss';

const Tournament = () => (
    <>
      <SelectionGames/>
      <TournamentBanner/>
    </>
);

export default Tournament;