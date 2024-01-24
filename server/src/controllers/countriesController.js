const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

const getCountries = async (req, res, next) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error });
    next(error);
  }
};

const getCountryById = async (req, res, next) => {
  const idCountry = req.params.idCountry;
  try {
    const country = await Country.findByPk(idCountry, {
      include: [
        {
          model: Activity,
          through: { attributes: [] },
        },
      ],
    });

    return country
      ? res.json(country)
      : res.status(404).json({ message: 'Country not found.' });
  } catch (error) {
    res.status(500).json({ error });
    next(error);
  }
};

const searchCountriesByName = async (req, res, next) => {
  const { name } = req.query;
  try {
    const countries = await Country.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    });

    if (countries.length === 0) {
      return res.status(404).json({ message: 'Countries not found' });
    }

    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

module.exports = {
  getCountries,
  getCountryById,
  searchCountriesByName,
};
