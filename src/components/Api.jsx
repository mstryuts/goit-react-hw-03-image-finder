import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29488809-58b059500460d672a67371786';

export async function fetchImages(q, page) {
  try {
    const result = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: false,
        per_page: 12,
        page,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchImages;
