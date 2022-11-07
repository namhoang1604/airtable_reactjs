import axios from 'axios';
import messageService from './messageService';

export default function apiService({ menthod, url, data = {}, option = {} }) {
  const instance = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
    baseURL: 'http://localhost:3000',
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      messageService('error', 'Something went wrong');
      return Promise.reject(error);
    },
  );
  switch (menthod) {
    case 'get':
      return instance.get(url, option);

    case 'post':
      return instance.post(url, data, option);

    case 'put':
      return instance.put(url, data, option);

    case 'delete':
      return instance.delete(url, data, option);

    default:
      console.error('There no support the menthod', menthod);
      return undefined;
  }
}
