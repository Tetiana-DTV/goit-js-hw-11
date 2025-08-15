import axios from 'axios';

const API_KEY = '51708418-3aac8028d9e6ae6b223e03bd7';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}