import axios from 'axios';

const baseUrl = 'http://localhost:3000/cms/api';
axios.defaults.baseURL = baseUrl;

export const getAllCollections = (token: string) => {
  return axios({
    method: 'GET',
    url: '/sites',
    headers: {
      Authorization: token,
      'api-id-key': '63d6f27890c3d78d93bff237',
    },
  });
};

export const getOneCollection = (token: string, collectionId: string) => {
  return axios({
    method: 'GET',
    url: `/collections/${collectionId}`,
    headers: {
      Authorization: token,
      'api-id-key': '63d6f27890c3d78d93bff237',
    },
  });
};
