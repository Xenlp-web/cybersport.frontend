import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getAllRegions = () => api.get(ENDPOINTS.GET_ALL_REGIONS);

export const {
  loadDataAction: loadAllRegionsDataAction,
  responseSelector: getAllRegionsResponseSelector
} = requestsFactory({ request: getAllRegions, stateRequestKey: 'get_all_regions' });