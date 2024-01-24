const { Router } = require('express');
const countriesController = require('../controllers/countriesController');
const activitiesController = require('../controllers/activitiesController');

const router = Router();

router.get('/countries', countriesController.getCountries);
router.get('/countries/name', countriesController.searchCountriesByName);
router.get('/countries/:idCountry', countriesController.getCountryById);

router.post('/activities', activitiesController.createActivity);
router.get('/activities', activitiesController.getActivities);

module.exports = router;
