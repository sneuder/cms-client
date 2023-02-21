import axios from 'axios';

const baseUrl = 'http://localhost:3000/cms/api';
axios.defaults.baseURL = baseUrl;

export const getAllCollections = (token: string) => {
  return axios({
    method: 'GET',
    url: '/sites/63bd7e23bfbced0b8e63db10/collections',
    headers: {
      Authorization: token,
    },
  });
};
