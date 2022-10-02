import { apiClient } from './apiClient';

const serviceApi = {
  getAll() {
    const url = 'services';
    return apiClient(url);
  },

  getById(id) {
    const url = `services/${id}`;
    return apiClient(url);
  },
};

export default serviceApi;
