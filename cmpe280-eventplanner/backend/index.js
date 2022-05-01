const express = require("express");
const router = express.Router();
const DB = require("./model");
const config = require("./config");

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
