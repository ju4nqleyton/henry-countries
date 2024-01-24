require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
    native: false,
  }
);

const modelDefiners = [];
const modelsPath = path.join(__dirname, './models');

fs.readdirSync(modelsPath)
  .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .forEach((file) => {
    const modelPath = path.join(modelsPath, file);
    const modelDefiner = require(modelPath);
    modelDefiners.push(modelDefiner);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const entries = Object.entries(sequelize.models);
const capsEntries = entries.map(([name, model]) => [
  name.charAt(0).toUpperCase() + name.slice(1),
  model,
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: 'CountryActivity' });
Activity.belongsToMany(Country, { through: 'CountryActivity' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
