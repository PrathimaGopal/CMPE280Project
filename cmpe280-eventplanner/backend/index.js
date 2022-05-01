const express = require("express");
const router = express.Router();
const DB = require("./model");
const config = require("./config");

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: config.host,
//   port: config.port,
//   user: config.user,
//   password: config.password,
//   database: config.database,
// });

// db.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Database Connected");
// });

/* GET home page. */
router.get("/", (req, res) => {
  res.status(200);
});

router.route("/booking").get((req, res) => {
  DB.Booking.findAll()
    .then((booking) => res.json(booking))
    .catch((err) => {
      console.log(err);
    });
});

router.route("/createBooking").post((req, res) => {
  DB.Booking.create({
    user_id: 2,
    occasion_id: 102,
    capacity: 4,
    address: "kaliyaperumal Veethi",
    locality: "Ludhiyana",
    date_Event: "2022-12-31",
    budget_in_dollars: 999,
  })
    .then((results) => res.status(200).send(results))
    .catch((err) => {
      console.log(
        "Could not submit request for new booking. Please try again.",
        err.message
      );
      return res
        .status(400)
        .send("Could not submit request for new booking. Please try again.");
    });
});

module.exports = router;
