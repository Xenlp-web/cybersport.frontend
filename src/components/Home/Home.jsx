import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import Jumbo from "../Jumbo/Jumbo.jsx";
import AdvantageCard from "../AdvantageCard/AdvantageCard.jsx";
import './home.scss';

const ADVANTAGECARD = [
    {
        images: 'img-1.png',
        title: 'Разнообразные форматы',
        text: 'В турнирах на киллы — мы платим за каждый килл, в турнирах на ТОП — главное выжить'
    },
    {
        images: 'img-2.png',
        title: 'Ежедневные рейтинги',
        text: 'После каждого турнира мы обновляем лидерборды, равняйся на лучших и стань одним из них'
    },
    {
        images: 'img-3.png',
        title: 'Выплаты удобным способом',
        text: 'Мы выплачиваем деньги на Qiwi карты и кошельки, Яндекс.Деньги и банковские карты'
    }
]

const Home = () => (
    <>
      <Jumbo />
        <Container>
            <CardDeck>
                <AdvantageCard cardInfo={ADVANTAGECARD} />
            </CardDeck>
        </Container>
    </>
);

export default Home;