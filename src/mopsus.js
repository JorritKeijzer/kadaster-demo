import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.MOPSUS_BASE_URL,
  headers: { 'x-api-key': process.env.MOPSUS_API_KEY },
});

/**
 * Gets object data based on zipcode
 * @param {string} zip - Zip code for the adress
 * @param {string | number} housenumber - Housenumber of the adress
 */
const getObjectData = async (zip, housenumber) => {
  try {
    const { data } = await API.post(`objectdata`, {
      postcode: zip,
      housenumber: housenumber,
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

const getEnergyLabel = async (zip, housenumber) => {
  try {
    const { data } = await API.post(`energylabel`, {
      postcode: zip,
      housenumber: housenumber,
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

// console.log(await getEnergyLabel('1013LB', 24));
