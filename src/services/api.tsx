import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character/';

export const apiCharacter = axios.create({
  baseURL: baseURL,

  headers: {
    Authorization: 'Basic ',

    'Content-type': 'application/json',
  },
});