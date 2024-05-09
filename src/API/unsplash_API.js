import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImagesByQuery = async configParams => {
  const result = await axios.get('/search/photos', {
    params: {
      per_page: 12,
      client_id: 'I7OySxM-KA4WRTDLuXOGiRENwVzHmbk7wk8K913Byzo',
      ...configParams,
    },
  });
  return result;
};
