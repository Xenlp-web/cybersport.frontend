// import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postDocumentsRequest = (fileName, gameId, activeTournament) => {
  const blob = new Blob([], {type: 'image/png'});
  const formData = new FormData();

  formData.append('image', blob, fileName);

  // data.tournament_common_info.img = formData;

  // console.log(formData);


  return api.post(ENDPOINTS.CHANGE_TOURNAMENT_BY_ADMIN, {
    tournament_id: activeTournament,
    game_id: gameId,
    tournament_common_info: {
      img: formData,
    },
    tournament_info_by_game: {
      tournament_id: activeTournament
    }
  }, {
    headers: {
      Accept: 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    },
  });
  // return Promise.allSettled(
  //   files.map((file) => {
  //     const formData = new FormData();
  //     formData.append('document[attachment]', file);
  //     formData.append('document[description]', `${id}:`);
  //     return api.post(ENDPOINTS.DOCUMENTS, formData, {
  //       headers: {
  //         Accept: 'multipart/form-data',
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //   })
  // );
};

export default postDocumentsRequest;

// export const {
//   doRequestAction: doDocumentsRequestAction,
//   responseSelector: responseDocumentsSelector,
//   requestFulfilledAction: requestDocumentsFulfilledAction,
//   errorSelector: errorDocumentsSelector,
//   requestRejectedAction: requestDocumentsRejectedAction
// } = requestsFactory({ request: postDocumentsRequest, stateRequestKey: 'documents_request' });
