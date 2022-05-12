const express = require("express");
const router = express.Router();
const DB = require("./model");
const config = require("./config");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mysecret";

const createToken = (email) => {
  try {
    return jwt.sign({ email }, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

/* GET home page. */
router.get("/", (req, res) => {
  res.status(200);
});

router.route("/booking").get((req, res) => {
  DB.Booking.findAll({
    attributes: [
      "booking_id",
      "event_type",
      "guest_count",
      "event_date",
      "event_time",
      "city",
      "address",
      "cuisine",
      "decoration",
      "photography",
      "videography",
      "music",
      "total_cost",
    ],
    where: {
      user_id: `${req.query.user_id}`,
    },
  })
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

router.route("/createUser").post((req, res) => {
  console.log(req.body);
  DB.newuser
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city: req.body.city,
      zipcode: req.body.zipcode,
    })
    .then((results) => res.status(200).send(results))
    .catch((err) => {
      console.log(
        "Could not submit request for new user. Please try again.",
        err
      );
      return res
        .status(400)
        .send("Could not submit request for new user. Please try again.");
    });
});

router.route("/login").get((req, res) => {
  const userName = req.query.user_name;
  DB.newuser
    .findAll({
      attributes: ["user_id"],
      where: {
        email: userName,
        password: `${req.query.password}`,
      },
    })
    .then((results) => {
      const userId = results[0]?.dataValues?.user_id;
      if (!userId) {
        return res.status(404).send({
          error: true,
          errorMessage: "User not authorized",
        });
      } else {
        const token = createToken(req.query.user_name);
        res.status(200).send({
          error: false,
          token,
          userName,
          userId,
        });
      }
    })
    .catch((err) => {
      console.log("Could not login. Please check credentials.", err);
      return res.status(400).send("Could not login. Please check credentials.");
    });
});

router.route("/postReview").post((req, res) => {
  console.log("***********", req.body);
  DB.review
    .create({
      comment: req.body.comment,
      rating: req.body.rating,
      commented_by: req.body.commented_by,
    })
    .then((results) => res.status(200).send(results))
    .catch((err) => {
      console.log("Could not submit review for user. Please try again.", err);
      return res
        .status(400)
        .send("Could not submit review for new user. Please try again.");
    });
});

router.route("/reviewdata").get((req, res) => {
  DB.review.findAll()
    .then((cmntdata) => res.json(cmntdata))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
