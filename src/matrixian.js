import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.MATRIXIAN_BASE_URL,
  headers: { Authorization: `bearer ${process.env.MATRIXIAN_API_KEY}` },
});

/**
 * Gets object data based on zipcode
 * @param {string} zip - Zip code for the adress
 * @param {string | number} housenumber - Housenumber of the adress
 */
const getObjectData = async (zip, housenumber) => {
  try {
    const { data } = await API.get(`mx-house-details`, {
      params: {
        postalCode: zip,
        houseNumber: housenumber,
      },
    });
    return data;
  } catch (e) {
    console.error(e.response.data);
  }
};

console.log('------- Matrixian -------', await getObjectData('1013LB', 24));
