const axios = require('axios');
const { Country } = require('../db');

const copyDataFromAPI = async () => {
  try {
    const response = await axios.get('http://localhost:5000/countries');
    const data = response.data;

    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format from API');
    }

    const countries = Object.values(data);

    const countriesToInsert = countries.map((country) => {
      const {
        cca3,
        name,
        flags,
        region,
        capital,
        subregion,
        area,
        population,
      } = country;
      const flag_image = flags.svg || flags.png;

      const validCapital = capital && capital.length > 0 ? capital[0] : '';

      return {
        id: cca3,
        name: name.common,
        flag_image,
        continent: region,
        capital: validCapital,
        subregion,
        area,
        population,
      };
    });

    await Country.bulkCreate(countriesToInsert);
  } catch (error) {
    console.error(error);
  }
};

module.exports = copyDataFromAPI;
