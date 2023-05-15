import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.EPONLINE_BASE_URL,
  headers: { Authorization: process.env.EPONLINE_API_KEY },
});

/**
 * Gets energylabel and data based on zipcode
 * @param {string} zip - Zip code for the adress
 * @param {string | number} housenumber - Housenumber of the adress
 */
const getEnergyLabel = async (zip, housenumber) => {
  try {
    const { data } = await API.get(`PandEnergielabel/Adres`, {
      params: {
        postcode: zip,
        huisnummer: housenumber,
        huisletter: null,
        huisnummertoevoeging: null,
      },
    });

    return { energylabel: data[0].labelLetter, data };
  } catch (e) {
    console.error(e.response.data);
  }
};

console.log('------- EP Online -------', await getEnergyLabel('1013LB', 24));
