// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('group-1', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql', // Sesuaikan dengan database Anda (mysql, postgres, dll)
// });


const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = sequelize;
