import Credentials from '@/interfaces/Crendentials';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/cms/api';
axios.defaults.baseURL = baseUrl;

const credentialsGenerator = (role, auth) => {
  return (credentials: Credentials) => {
    return axios({
      method: 'POST',
      url: `/${role}/${auth}`,
      data: credentials,
    });
  };
};

export default credentialsGenerator;
