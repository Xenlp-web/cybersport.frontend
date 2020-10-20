import axios from 'axios';
import identity from 'ramda/src/identity';
import path from 'ramda/src/path';

import config from '@config/app/default';

const { serverUrl } = config.common.api;

const instance = axios.create({
  baseURL: serverUrl,
  withCredentials: true
});

const handleError = (error) => {
  return Promise.reject(path(['response', 'data'], error));
};

instance.interceptors.response.use(identity, handleError);

const api = {
  get: (url, config = {}, params) => instance.get(url, {
    params,
    responseType: 'json',
    ...config,
  })
  .then(({ data }) => data),
  post: (url, data, config) => instance.post(url, data, config).then(({ data }) => data),
  patch: (url, data, config) => instance.patch(url, data, config).then(({ data }) => data),
  put: (url, data, config) => instance.put(url, data, config).then(({ data }) => data),
  delete: (url, data, config) => instance.delete(url, { ...config, data }).then(({ data }) => data),
};

export default api;