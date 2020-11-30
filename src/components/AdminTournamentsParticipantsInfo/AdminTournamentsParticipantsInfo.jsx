import {useSelector} from "react-redux";
import {responseGetUsersForTournamentSelector} from "@app/api/requests/tournamentParticipants";
import React from "react";

const AdminTournamentsParticipantsInfo = () => {
  const infoParticipants = useSelector(responseGetUsersForTournamentSelector);

  if (!!infoParticipants) {
    const InfoParticipant = infoParticipants.users.map(({ id, nickname }, index) => (
      <tr key={index}>
        <td>{id}</td>
        <td>{nickname}</td>
      </tr>
    ));

    return (
      InfoParticipant
    )
  } else {
    return (
      <tr className="mt-3 flex-nowrap">
        <td>Нет участников</td>
      </tr>
    )
  }
};

export default AdminTournamentsParticipantsInfo;