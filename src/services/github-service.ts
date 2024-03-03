import axios from 'axios';
import { BASE_URL } from './../ultils/system';


export function buscarUsuario(user: string) {
  return axios.get(`${BASE_URL}/${user}`)
}