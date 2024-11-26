const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "zupeetercm_zptrrrrlhdjnew",// db name
  "root",// username
  "Sudheer@123", // password
  {
    dialect: "mysql",
    host: "51.20.93.31",
    logging: false,
  }
);
module.exports = sequelize;
