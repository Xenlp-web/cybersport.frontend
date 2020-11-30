import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {Container, ListGroup, Dropdown, DropdownButton, Image, Badge} from "react-bootstrap";
import './table-rating.scss';

import {statisticsForPlayersSelector} from '@app/selectors/statisticForPlayersSelector';
import useInit from "@app/utils/init";
import {forcedLoadStatisticForPlayersDataAction} from "@app/api/requests/statisticForPlayers";

const configFilters = {
  position: {
    earnings: 'Доходы',
    kills: 'Килы',
    placements: 'Места',
    tournaments: 'Турниры'
  },
  period: {
    day: 'За день',
    month: 'За неделю',
    week: 'За месяц',
    all: 'За все время'
  }
};

const positionsArrays = Object.entries(configFilters.position);
const periodsArrays = Object.entries(configFilters.period);

const positions = positionsArrays.map(([key, value], index) => (
  <Dropdown.Item key={index} className="rating-sort-item" as="button" eventKey={key}>{value}</Dropdown.Item>
));

const periods = periodsArrays.map(([key, value], index) => (
  <Dropdown.Item key={index} className="rating-sort-item" as="button" eventKey={key}>{value}</Dropdown.Item>
));

const TableRatings = () => {
  const [gameIdSelected, setGameIdSelected] = useState(1);
  const [positionSelected, setPositionSelected] = useState('earnings');
  const [periodSelected, setPeriodSelected] = useState('all');

  useInit(() => forcedLoadStatisticForPlayersDataAction({
    game_id: gameIdSelected,
    stat_item: positionSelected,
    period: periodSelected
  }), [gameIdSelected, positionSelected, periodSelected]);

  return (
    <Container className="container--indent">
      <div className="rating-head d-flex justify-content-between">
        <h2 className="d-none d-md-inline">По доходу</h2>
        <div className="rating-sort--wrapper">
          <DropdownButton onSelect={(position) => setPositionSelected(position)} className="rating-sort-head" id="dropdown-position-button" title={configFilters.position[positionSelected]}>
            {positions}
          </DropdownButton>

          <DropdownButton onSelect={(period) => setPeriodSelected(period)} className="rating-sort-head" id="dropdown-period-button" title={configFilters.period[periodSelected]}>
            {periods}
          </DropdownButton>
        </div>
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item>
        <span>
          <Image src="https://web70.xenforce.ru/api/storage/app/public/avatars/1.png" roundedCircle/>
            <Badge pill variant="dark">
              1
            </Badge>
        </span>
          <span>
          dfgdfg@mail.ru
        </span>
          <span>
          Коментарий: <b>dfgdfgdfg dfg</b>
        </span>
        </ListGroup.Item>
        <ListGroup.Item>
        <span>
          <Image src={require("../../images/avatars/img-2.jpg").default} roundedCircle/>
            <Badge pill variant="dark">
              2
            </Badge>
        </span>
          <span>
          dfgdfg@mail.ru
        </span>
          <span>
        </span>
        </ListGroup.Item>
        <ListGroup.Item>
        <span>
          <Image src={require("../../images/avatars/img-1.jpg").default} roundedCircle/>
            <Badge pill variant="dark">
              3
            </Badge>
        </span>
          <span>
          dfgdfg@mail.ru
        </span>
          <span>
        </span>
        </ListGroup.Item>
        <ListGroup.Item>
        <span>
          <Image src={require("../../images/avatars/img-2.jpg").default} roundedCircle/>
            <Badge pill variant="dark">
              4
            </Badge>
        </span>
          <span>
          dfgdfg@mail.ru
        </span>
          <span>
          Коментарий: <b>dfgdfgdfg dfg</b>
        </span>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default TableRatings;
