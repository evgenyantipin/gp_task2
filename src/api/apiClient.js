import fetch from 'isomorphic-unfetch';

const apiBaseUrl = 'http://localhost:7070/api';

export const apiClient = (endpoint, body = null, method = 'GET') => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const config = {
    method: body ? 'POST' : method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  return fetch(`${apiBaseUrl}/${endpoint}`, config).then((r) => r.json());
};
