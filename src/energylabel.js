import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const API = axios.create({
  baseURL: `https://public.ep-online.nl/api/v3/`,
  headers: { Authorization: process.env.EPONLINE_API_KEY },
});

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
    console.log(data);
    return `Energielabel: ${data[0].labelLetter}`;
  } catch (e) {
    console.error(e);
  }
};

console.log(await getEnergyLabel('1013LB', 24));
