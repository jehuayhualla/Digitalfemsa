import axios from 'axios';
import { API_URL } from '../constants/enviroment';

const fetcher = (URL: string) => {
  console.log('fetcher', API_URL + URL)
  return axios.get(API_URL + URL).then((res) => res.data);
}

export default fetcher;