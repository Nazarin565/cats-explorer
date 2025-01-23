import { client } from './httpClient';

export const getRandomCats = async () => {
  try {
    const response = await client.get('breeds?limit=10&page=0');

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const getRandomCatsImages = async () => {
  try {
    const response = await client.get('images/search?limit=100');

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
