import { client } from './httpClient';

export const getCats = async () => {
  try {
    const response = await client.get('breeds?limit=100');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRandomCatImage = async () => {
  try {
    const response = await client.get('images/search');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
