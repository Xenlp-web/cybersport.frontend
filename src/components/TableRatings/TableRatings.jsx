import React from 'react';
import {Container, ListGroup, Dropdown, DropdownButton, Image, Badge} from "react-bootstrap";
import './table-rating.scss';

const TableRatings = () => (
  <Container>
    <div className="rating-head d-flex justify-content-between">
      <h2 className="d-none d-md-inline">По доходу</h2>
      <div className="rating-sort--wrapper">
        <DropdownButton className="rating-sort-head" id="dropdown-basic-button" title="Доход">
          <Dropdown.Item className="rating-sort-item" href="#/action-1">Доход</Dropdown.Item>
          <Dropdown.Item className="rating-sort-item" href="#/action-2">Киллы</Dropdown.Item>
          <Dropdown.Item className="rating-sort-item" href="#/action-3">Места</Dropdown.Item>
          <Dropdown.Item className="rating-sort-item" href="#/action-4">Турниры</Dropdown.Item>
        </DropdownButton>

        <DropdownButton className="rating-sort-head" id="dropdown-basic-button" title="За день">
          <Dropdown.Item className="rating-sort-item" href="#/action-1">За день</Dropdown.Item>
          <Dropdown.Item className="rating-sort-item" href="#/action-2">За неделю</Dropdown.Item>
          <Dropdown.Item className="rating-sort-item" href="#/action-3">За месяц</Dropdown.Item>
          <Dropdown.Item className="rating-sort-item" href="#/action-4">За все время</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <span>
          <Image src={require("../../images/avatars/img-1.jpg").default} roundedCircle />
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
          <Image src={require("../../images/avatars/img-2.jpg").default} roundedCircle />
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
          <Image src={require("../../images/avatars/img-1.jpg").default} roundedCircle />
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
          <Image src={require("../../images/avatars/img-2.jpg").default} roundedCircle />
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

export default TableRatings;