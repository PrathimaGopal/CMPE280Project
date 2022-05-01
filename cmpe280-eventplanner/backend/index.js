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
  console.log(
    req.body.user_id,
    req.body.event_type,
    req.body.event_space,
    req.body.guest_count,
    req.body.event_date,
    req.body.event_time,
    req.body.city,
    req.body.address,
    req.body.cuisine,
    req.body.decoration,
    req.body.photography,
    req.body.videography,
    req.body.music,
    req.body.total_cost
  );
  DB.Booking.create({
    user_id: req.body.user_id,
    event_type: req.body.event_type,
    event_space: req.body.event_space,
    guest_count: req.body.guest_count,
    event_date: req.body.event_date,
    event_time: req.body.event_time,
    city: req.body.city,
    address: req.body.address,
    cuisine: req.body.cuisine,
    decoration: req.body.decoration,
    photography: req.body.photography,
    videography: req.body.videography,
    music: req.body.music,
    total_cost: req.body.total_cost,
  })
    .then((results) => res.status(200).send(results))
    .catch((err) => {
      console.log(
        "Could not submit request for new booking. Please try again.",
        err
      );
      return res
        .status(400)
        .send("Could not submit request for new booking. Please try again.");
    });
});

module.exports = router;
