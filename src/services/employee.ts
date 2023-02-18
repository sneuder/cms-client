import axios from 'axios';

const baseUrl = 'http://localhost:3000/cms/api';
axios.defaults.baseURL = baseUrl;

export const getAllEmployees = (token: string) => {
  return axios({
    method: 'GET',
    url: '/employees',
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const getOneEmployee = (token: string, employeeId: string) => {
  return axios({
    method: 'GET',
    url: `/employee/${employeeId}`,
    headers: {
      Authorization: token,
    },
  });
};
