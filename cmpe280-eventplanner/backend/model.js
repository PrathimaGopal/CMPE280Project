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
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    event_type: DataTypes.STRING,
    event_space: DataTypes.STRING,
    guest_count: DataTypes.INTEGER,
    event_date: DataTypes.STRING,
    event_time: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    decoration: DataTypes.STRING,
    photography: DataTypes.STRING,
    videography: DataTypes.STRING,
    music: DataTypes.STRING,
    total_cost: DataTypes.INTEGER,
  },
  {
    tableName: "Booking",
    timestamps: false,
  }
);

const newuser = sequelize.define(
  "newuser",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING, 
  },
  {
    tableName: "newuser",
    timestamps: false,
  }
);

const review = sequelize.define(
  "review",
  {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    comment: DataTypes.STRING, 
    rating: DataTypes.INTEGER,
    commented_by: DataTypes.STRING,
  },
  {
    tableName: "Review",
    timestamps: false,
  }
);

module.exports = {
  sequelize,
  Booking,
  newuser,
  review,
};
