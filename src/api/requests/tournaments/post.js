import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postCreateTournamentRequest = (data) => api.post(ENDPOINTS.CREATE_TOURNAMENT, data);

export const {
  doRequestAction: doCreateTournamentRequestAction,
} = requestsFactory({ request: postCreateTournamentRequest, stateRequestKey: 'create_tournament' });
