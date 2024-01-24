const { Activity, Country } = require('../db');

const createActivity = async (req, res, next) => {
  const { name, difficulty, duration_hours, season, countries } = req.body;

  try {
    const activity = await Activity.create({
      name,
      difficulty,
      duration_hours,
      season,
    });

    if (countries && countries.length > 0) {
      const countriesToAdd = await Country.findAll({
        where: { id: countries },
      });

      await activity.setCountries(countriesToAdd);
    }

    res.json(activity);
  } catch (error) {
    res.status(500).json({ error });
    next(error);
  }
};

const getActivities = async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error });
    next(error);
  }
};

module.exports = {
  createActivity,
  getActivities,
};
