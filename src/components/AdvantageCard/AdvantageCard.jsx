import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './advantage-card.scss';

const AdvantageCard = (props) => {
    const cardInfo = props.cardInfo;
    const cardItems = cardInfo.map(({images, title, text}, index) => (
        <Col xs={12} md={4} key={index} className='mb-3 mb-md-0'>
            <Card className='advantage_card text-white text-center d-flex align-items-center flex-column bg-dark mx-0'>
                <div className="advantage_card-head rounded-circle d-flex align-items-center">
                    <Card.Img src={require("../../images/advantage_card/" + images).default}/>
                </div>
                <Card.Body className="p-0">
                    <Card.Title className="advantage_card-title" as="h4">{title}</Card.Title>
                    <Card.Text  className="advantage_card-text">
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));

    return cardItems;
};

export default AdvantageCard;