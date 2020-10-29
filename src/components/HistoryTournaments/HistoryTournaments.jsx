import React from 'react';
import {Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./history-tournaments.scss";

// const historyCardInfo = [
//   {
//     images: 'img-1.jpg',
//     currentPlayers: 5,
//     maxPlayers: 15,
//     title: 'Arcade Cup #10',
//     mode: 'Турнир за киллы',
//     type: 'SOLO TPP',
//     time: '12:30',
//     priceForKill: 30,
//     costTickets: 1,
//     important: false
//   }
// ];

// const RenderCards = () => {
//   const HistoryCard = historyCardInfo.map(({
//                                          currentPlayers,
//                                          maxPlayers,
//                                          title,
//                                          mode,
//                                          type,
//                                          time,
//                                          priceForKill
//                                        }, index) => {
//     return (
//       <Col key={index} className={'h-card'}>
//         <Card>
//           <Card.Body>
//             <div className="h-card-group justify-content-between d-flex mb-2">
//               <span className="h-card__players font-weight-light">{currentPlayers}/{maxPlayers} участников</span>
//               <span className="h-card__type">{type}</span>
//             </div>
//             <div className="h-card-group h5 justify-content-between d-flex mb-2 font-weight-bold">
//               <span className="h-card__title">{title}</span>
//               <span className="h-card__time"><span className="clock"> </span>{time}</span>
//             </div>
//             <div className="h-card-group justify-content-between d-flex">
//               <div>
//                 <span className="h-card__mode font-weight-light">{mode}</span>
//                 <span className="h-card__price-kill font-weight-bolder">{priceForKill}₽ за килл</span>
//               </div>
//               <Link className="h-card__link text-danger font-weight-light" to="/">Посмотреть результат</Link>
//             </div>
//           </Card.Body>
//         </Card>
//       </Col>
//     )
//   });
//
//   return (
//     HistoryCard
//   )
// };

const HistoryTournamentsCards = () => {
  let historyContent = '';
  // if (historyCardInfo) {
  //   historyContent  = <RenderCards/>
  // } else {
    historyContent = <div className='h-tournaments-info text-center'>
      <p className='h-tournaments-info--text'>Вы не участвовали в турнирах</p>
      <Link to="/tournament" className='h-tournaments-info--link'>Принять участие</Link>
    </div>;
  // }
  return historyContent;
};

export default HistoryTournamentsCards;