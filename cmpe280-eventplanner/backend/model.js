const { Sequelize, DataTypes, DATE } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: "mysql",
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    language: "en",
    mxConcurrentQueries: 100,
    pool: { maxConnections: 10, maxIdleTime: 30 },
    logging: console.log, // disable logging; default: console.log
  }
);

const Booking = sequelize.define(
  "Booking",
  {
    booking_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    occasion_id: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    address: DataTypes.STRING,
    locality: DataTypes.STRING,
    date_event: DataTypes.DATE,
    budget_in_dollar: DataTypes.INTEGER,
  },
  {
    tableName: "Booking",
    timestamps: false,
  }
);

module.exports = {
  sequelize,
  Booking,
};
